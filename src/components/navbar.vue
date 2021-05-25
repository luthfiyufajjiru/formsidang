<template>
  <div>
    <v-app-bar flat>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-img class="icon-text" src="../assets/Makara_Kuning.png" max-width="30px" />
      <v-app-bar-title >Portal Formulir Geosains Universitas Indonesia</v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer app width="35%" v-model="drawer">
      <v-list>
        <v-list-item link>
          <v-menu offset-y bottom open-on-hover>
            <template v-slot:activator="{ on, attrs }">
              <v-list-item-avatar>
                <v-img
                  src="https://randomuser.me/api/portraits/women/85.jpg"
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-content v-bind="attrs" v-on="on">
                <v-list-item-title class="title">
                  Sandra Adams
                </v-list-item-title>
                <v-list-item-subtitle
                  >sandra_a88@gmail.com</v-list-item-subtitle
                >
              </v-list-item-content>
            </template>
            <v-list>
              <v-list-item link>
                <v-icon class="icon-text">mdi-account</v-icon> Profil
              </v-list-item>
              <v-list-item link>
                <v-icon class="icon-text">mdi-logout</v-icon> Logout
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn icon @click.stop="drawer = !drawer">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-treeview
        v-model="tree"
        :active.sync="active"
        :open="initiallyOpen"
        :items="getItems"
        activatable
        item-key="name"
        open-on-click
        @update:active="routeMenu"
      >
        <template v-slot:prepend="{ item, open }">
          <v-icon v-if="!item.file">
            {{ open ? "mdi-folder-open" : "mdi-folder" }}
          </v-icon>
          <v-icon v-else>
            {{ getFiles[item.file] }}
          </v-icon>
        </template>
      </v-treeview>
    </v-navigation-drawer>
  </div>
</template>

<script>
import store from "../store";
import { mapGetters } from "vuex";
import router from "../router";

export default {
  name: "Home",
  store,
  router,
  computed: {
    ...mapGetters(["getItems", "getFiles"]),
  },
  data: () => ({
    active: [],
    initiallyOpen: ["Skripsi"],
    tree: [],
    drawer: false,
  }),
  components: {},
  watch: {},
  methods: {
    routeMenu() {
        this.active.length 
        ? router.push(this.getItems[0].children.find(item => item.name === this.active[0]).path) 
        : router.push('/');
      
    },
  },
};
</script>

<style>
 .icon-text {
     margin-right: 10px
 }
</style>