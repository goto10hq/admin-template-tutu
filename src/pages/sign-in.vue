<template>
  <div>
    <slot name="splash"></slot>
    <div class="card mx-auto w-max-5">
      <div class="card-header">
        <slot name="header">{{ $store.state.config.signInTitle }}</slot>
      </div>
      <div class="card-body">
        <alert :errors="errors"></alert>
        <form method="post" @submit.prevent="signIn()" novalidate>
          <div class="form-group">
            <input
              v-model="x.login"
              type="text"
              class="form-control"
              :disabled="$store.state.working"
              required
            />
            <span class="floating-label">
              <span v-show="!$v.x.login.$error">{{ $store.state.config.login }}</span>
              <span
                v-show="$v.x.login.$error && !$v.x.login.required"
                class="error"
              >{{ $store.state.config.loginRequired }}</span>
            </span>
          </div>
          <div class="form-group">
            <input
              v-model="x.password"
              type="password"
              class="form-control"
              :disabled="$store.state.working"
              required
            />
            <span class="floating-label">
              <span v-show="!$v.x.password.$error">{{ $store.state.config.password }}</span>
              <span
                v-show="$v.x.password.$error && !$v.x.password.required"
                class="error"
              >{{ $store.state.config.passwordRequired }}</span>
            </span>
          </div>
          <div class="form-group text-center">
            <button type="submit" class="btn btn-secondary" :disabled="$store.state.working">
              <span :class="$store.state.config.signInIcon"></span>
              {{ $store.state.config.signInButton }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import { required } from 'vuelidate/lib/validators'
  import axios from 'axios'
  import alert from '../../src/components/alert.vue'

  export default {
    components: {
      alert
    },
    data () {
      return {
        working: false,
        x: {
          login: '',
          password: ''
        },
        errors: []
      }
    },
    validations () {
      let validations = {
        x: {
          login: { required },
          password: { required }
        }
      }

      return {
        x: validations.x,
        validationGroup: ['x']
      }
    },
    mounted () {
      $('.form-gp input').on('focus', function () {
        $(this)
          .parent('.form-gp')
          .addClass('focused')
      })
      $('.form-gp input').on('focusout', function () {
        if ($(this).val().length === 0) {
          $(this)
            .parent('.form-gp')
            .removeClass('focused')
        }
      })
    },
    route: {
      canReuse: false
    },
    methods: {
      signIn () {
        var self = this
        self.$v.$touch()
        if (self.$v.x.$invalid) {
          return
        }

        self.$v.x.$reset()
        self.$store.commit('work')
        self.errors = []

        if (self.$store.state.config.devMode) {
          if (self.x.login === self.x.password) {
            self.$store.commit('picnic')
            self.$store.commit('setUser', { login: self.x.login })
            if (self.$store.state.user != null) {
              self.$router.push({
                name: self.$store.state.config.menu[0].name,
                params: self.$store.state.config.menu[0].params
              })
            }
          } else {
            self.$store.commit('fail')
            self.errors = {
              message: '',
              errors: [{ field: null, message: 'Invalid login or password.' }]
            }
          }
        } else {
          axios
            .post(self.$store.state.config.signInAjaxUrl, self.x)
            .then(response => {
              self.$store.commit('picnic')
              self.$store.commit('setUser', response.data)
              if (self.$store.state.user != null) {
                self.$router.push({
                  name: self.$store.state.config.menu[0].name,
                  params: self.$store.state.config.menu[0].params
                })
              }
            })
            .catch(error => {
              self.$store.commit('fail')
              try {
                self.errors = error.response.data
              } catch (e) {
                console.log('ERROR', e)
              }
            })
        }
      }
    }
  }
</script>
