<template>
  <div class="card mx-auto w-max-5">
    <div class="card-header">Signing in</div>
    <div class="card-body">
      <alert :errors="errors"></alert>
      <form method="post" @submit.prevent="signIn()" novalidate>
        <div class="form-group">
          <input v-model="x.login" type="text" class="form-control" required />
          <span class="floating-label">
            <span v-show="!$v.x.login.$error">Login</span>
            <span
              v-show="$v.x.login.$error && !$v.x.login.required"
              class="error"
            >Login is required.</span>
          </span>
        </div>
        <div class="form-group">
          <input v-model="x.password" type="password" class="form-control" required />
          <span class="floating-label">
            <span v-show="!$v.x.password.$error">Password</span>
            <span
              v-show="$v.x.password.$error && !$v.x.password.required"
              class="error"
            >Password is required.</span>
          </span>
        </div>
        <div class="form-group text-center">
          <button type="submit" class="btn btn-secondary"><span class="ti-user"></span> Sign in</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  import { required } from 'vuelidate/lib/validators'
  import axios from 'axios'
  import config from './config'
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
        self.working = true
        self.errors = []

        if (config.devMode) {
          if (self.x.login === self.x.password) {
            self.$store.commit('setUser', { login: self.x.login })
            if (self.$store.state.user != null) {
              self.$router.push({
                name: config.menu[0].name,
                params: config.menu[0].params
              })
            }
          } else {
            self.errors = {
              message: '',
              errors: [{ field: null, message: 'Invalid login or password.' }]
            }
          }
        } else {
          axios
            .post(config.signInAjaxUrl, self.x)
            .then(response => {
              self.working = false
              self.$store.commit('setUser', response.data)
              if (self.$store.state.user != null) {
                self.$router.push({
                  name: config.menu[0].name,
                  params: config.menu[0].params
                })
              }
            })
            .catch(error => {
              self.working = false
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
