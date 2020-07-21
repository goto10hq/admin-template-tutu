<template>
  <div
    class="wrapper"
    :class="[{'sidebar-collapsed' : isSidebarCollapsed}, isSidebarEntire ? 'sidebar-entire' : 'sidebar-compressed']"
  >
    <keep-alive>
      <nav v-if="$store.state.user != null" class="navbar navbar-expand navbar-light bg-light">
        <div class="sidebar-nav-row">
          <span class="sidebar-nav-icon sidebar-toggle" @click="toggleSidebarVisibility()">
            <span class="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </span>
          <router-link
            class="navbar-brand"
            :to="{ name: $store.state.config.menu[0].name, params: $store.state.config.menu[0].params }"
          >{{ $store.state.config.title }}</router-link>
        </div>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >{{ $store.state.user.login }}</a>
            <div class="dropdown-menu dropdown-menu-right">
              <template
                v-if="$store.state.config.userMenu != null && $store.state.config.userMenu.length > 0"
              >              
                <router-link
                  v-for="(m, mi) in $store.state.config.userMenu"
                  :key="'user-menu-' + mi"
                  v-slot="{ href, route, navigate, isActive }"                  
                  :to="{ name: m.name, params: m.params }" 
                >
                  <a v-if="m.type == undefined" :href="href" class="dropdown-item"><i :class="m.icon"></i> {{ m.text }}</a>
                  <div v-if="m.type == 'divider'" class="dropdown-divider"></div>
                  <a v-if="m.type == 'sign-out'" class="dropdown-item" href="#" @click.prevent="signOut()"><i :class="m.icon"></i> {{ m.text }}</a>
                </router-link>
              </template>              
            </div>
          </li>
        </ul>
      </nav>
    </keep-alive>
    <div class="content">
      <keep-alive>
        <aside v-if="$store.state.user != null" class="sidebar">
          <div v-if="$store.state.config.menuHeader != null" class="sidebar-header">
            <div class="sidebar-nav-row">
              <span class="sidebar-nav-icon">
                <i :class="$store.state.config.menuHeader.icon"></i>
              </span>
              <span class="sidebar-nav-text">{{ $store.state.config.menuHeader.text }}</span>
            </div>
          </div>
          <div class="sidebar-body vertical-scroll custom-scrollbar">
            <nav class="sidebar-nav">
              <template v-for="m in $store.state.config.menu">
                <div :key="m.name" :class="getActiveMenuClass(m)" class="sidebar-nav-group">
                  <router-link
                    v-if="m.path != undefined && m.path != null"
                    :to="{ name: m.name, params: m.params }"
                    class="sidebar-nav-row sidebar-nav-item"
                  >
                    <span class="sidebar-nav-icon">
                      <i
                        v-if="m.subs == undefined || m.subs == null || m.subs.length == 0"
                        :class="m.icon"
                      ></i>
                      <i
                        v-if="m.subs != undefined && m.subs != null && m.subs.length > 0 && (activeMenuWithSubItems == null || activeMenuWithSubItems != m.name)"
                        class="ti-angle-right"
                      ></i>
                      <i
                        v-if="m.subs != undefined && m.subs != null && m.subs.length > 0 && activeMenuWithSubItems != null && activeMenuWithSubItems == m.name"
                        class="ti-angle-down"
                      ></i>
                    </span>
                    <span class="sidebar-nav-text">{{ m.text }}</span>
                  </router-link>
                  <a
                    v-if="m.path == undefined || m.path == null"
                    href="#"
                    class="sidebar-nav-row sidebar-nav-item"
                    @click="selectMenuWithSubItems(m.name, true)"
                  >
                    <span class="sidebar-nav-icon">
                      <i
                        v-if="m.subs == undefined || m.subs == null || m.subs.length == 0"
                        :class="m.icon"
                      ></i>
                      <i
                        v-if="m.subs != undefined && m.subs != null && m.subs.length > 0 && (activeMenuWithSubItems == null || activeMenuWithSubItems != m.name)"
                        class="ti-angle-right"
                      ></i>
                      <i
                        v-if="m.subs != undefined && m.subs != null && m.subs.length > 0 && activeMenuWithSubItems != null && activeMenuWithSubItems == m.name"
                        class="ti-angle-down"
                      ></i>
                    </span>
                    <span class="sidebar-nav-text">{{ m.text }}</span>
                  </a>
                  <template
                    v-if="m.subs != undefined && m.subs != null && m.subs.length > 0 && activeMenuWithSubItems != null && activeMenuWithSubItems == m.name"
                  >
                    <router-link
                      v-for="m2 in m.subs"
                      :key="m2.name"
                      :to="{ name: m2.name, params: m2.params }"
                      :class="[$route.name == m2.name && 'active']"
                      class="sidebar-nav-row sidebar-nav-item"
                    >
                      <span class="sidebar-nav-icon">
                        <i :class="m2.icon"></i>
                      </span>
                      <span class="sidebar-nav-text">{{ m2.text }}</span>
                    </router-link>
                  </template>
                </div>
              </template>
            </nav>
          </div>
          <div class="sidebar-footer">
            <router-link
              v-for="f in $store.state.config.footer"
              :key="'f' + f.name"
              :to="{ name: f.name, params: f.params }"
              class="sidebar-nav-row"
            >
              <span class="sidebar-nav-icon">
                <i :class="f.icon"></i>
              </span>
              <span class="sidebar-nav-text">{{ f.text }}</span>
            </router-link>
            <div v-if="$store.state.config.footerToggleButton != null" class="sidebar-nav-row">
              <template
                v-if="$store.state.config.footerToggleButton.text != null && $store.state.config.footerToggleButton.text != ''"
              >
                <span class="sidebar-nav-icon">
                  <i :class="$store.state.config.footerToggleButton.icon"></i>
                </span>
                <span class="sidebar-nav-text">{{ $store.state.config.footerToggleButton.text }}</span>
              </template>
              <button class="sidebar-nav-icon ml-auto visible-entire" @click="toggleSidebarWidth()">
                <i class="ti-angle-double-left"></i>
              </button>
            </div>
            <div class="sidebar-nav-row visible-compressed">
              <button class="sidebar-nav-icon" @click="toggleSidebarWidth()">
                <i class="ti-angle-double-right"></i>
              </button>
            </div>
          </div>
        </aside>
      </keep-alive>
      <div class="frame" :class="{ 'justify-content-center': $store.state.user == null }">
        <div id="frame-scrollable" class="container-fluid vertical-scroll">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  // eslint-disable-next-line no-unused-vars
  import { dropdown, collapse } from 'bootstrap'
  import helper from '../../src/js/helper.js'
  import axios from 'axios'

  export default {
    name: 'Tutu',
    mixins: [helper],
    watch: {
      // eslint-disable-next-line no-unused-vars
      $route (to, from) {
        this.checkMenu(to.name)
      }
    },
    created () {
      this.checkMenu(this.$route.name)
    },
    methods: {
      checkMenu (name) {
        let menu = null
        let submenu = null
        for (let m of this.$store.state.config.menu) {
          if (name == m.name) {
            menu = m
            break
          }
          if (m.subs != undefined && m.subs != null && m.subs.length > 0) {
            for (let m2 of m.subs) {
              if (name == m2.name) {
                menu = m
                submenu = m2
                break
              }
            }
          }
          if (menu != null || submenu != null) {
            break
          }
        }

        if (submenu != null) {
          this.selectMenuWithSubItems(menu.name, false)
        } else if (menu != null) {
          this.selectMenuWithSubItems(menu.name, false)
        }
      },
      getActiveMenuClass (m) {
        let classes = []
        if (m.subs == undefined || m.subs == null || m.subs.length == 0) {
          if (this.$route.name == m.name) {
            classes.push('active')
          }
        } else {
          if (
            this.activeMenuWithSubItems != null &&
            this.activeMenuWithSubItems == m.name
          ) {
            classes.push('active')
          }
        }

        return classes
      },
      signOut () {
        let self = this

        if (self.$store.state.config.devMode) {
          self.$store.commit('setUser', null)
          self.$router.push({ path: self.$store.state.config.signInUrl })
        } else {
          axios.post(self.$store.state.config.signOutAjaxUrl).then(response => {
            self.$store.commit('setUser', null)
            self.$router.push({ path: self.$store.state.config.signInUrl })
          })
        }
      }
    }
  }
</script>
