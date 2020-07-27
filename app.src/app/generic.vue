<template>
  <b-container fluid>
    <!-- <h1>
      <i class="ti-user"></i>
      {{ headline }}
    </h1> -->
    <b-breadcrumb :items="breadcrumb"></b-breadcrumb>
    <b-row>
      <b-col md="6">
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Iq</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in items" :key="i.name">
              <td>{{ i.name }}</td>
              <td>{{ i.cuteness }}</td>
            </tr>
          </tbody>
        </table>
      </b-col>
      <b-col md="6">
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Rank</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(i, rank) in items" :key="i.name">
              <td>{{ i.name }}</td>
              <td>{{ rank + 1 }}</td>
            </tr>
          </tbody>
        </table>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
  import Vue from 'vue'

  import config from '../core/config'

  import BootstrapVue from 'bootstrap-vue'
  Vue.use(BootstrapVue)

  export default {
    data () {
      return {
        items: [
          { name: 'Kanna', cuteness: 90 },
          { name: 'Nenecchi', cuteness: 80 },
          { name: 'Kumiko', cuteness: 70 }
        ]
      }
    },
    computed: {
      breadcrumb () {
        const items = [
          {
            text: 'Home',
            href: 'https://google.com'
          },
          {
            text: 'Posts',
            to: { name: 'home' }
          },
          {
            text: 'Another Story',
            active: true
          }
        ]

        return items
      },
      headline () {
        let name = this.$route.name
        for (let m of config.menu) {
          if (name == m.name) {
            return m.text
          }
          if (m.subs != undefined && m.subs != null && m.subs.length > 0) {
            for (let m2 of m.subs) {
              if (name == m2.name) {
                return m2.text
              }
            }
          }
        }

        return '?'
      }
    }
  }
</script>