<template lang="html">
  <header class="header">
    <div class="contact">
      <div class="hcontainer centered">
        <div class="contact-list">
          <span class="contact-context"></span>
          <a class="link" v-for="item in seed.contact.items" :key="item.to" :href="item.to">
            <span class="contact-item">{{item.context}}</span>
          </a>
        </div>
        <a class="link" v-for="item in seed.contact.social" :key="item.to" :href="item.to"><div ><span><fa class="contact-social" :icon="['fab', item.icon]"/></span></div></a>
      </div>
    </div>
    <div class="nav-main">
      <div class="hcontainer">
        <nav class="nav">
          <ul class="nav-bar">
            <li class="nav-item" v-for="item in seed.nav" :key="item.to">
              <a class="link" :href="item.to">
                <div class="link-item" :class="{'active': item.active}">
                  <span class="nav-context" v-if="item.src">
                    <img :src="item.src"/>
                  </span>

                  <span class="nav-context" v-else>
                    {{item.title}}
                  </span>
                </div>
              </a>
            </li>

                <v-layout id="dropdown-example">
                  <v-overflow-btn

                  :items="dropdown_font"
                  label="Cathegory"
                  target="#dropdown-example"

                  ></v-overflow-btn>
                </v-layout>
                <!-- </v-container> -->
            <li class="nav-item-right" v-for="item in seed.buttons" :key="item.to"><a class="link" :href="item.to"><div class="link-item"><span class="nav-context left"><fa class="icon" :icon="['fas', item.title]"/></span></div></a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
//font-family: 'Roboto Condensed', sans-serif;
export default {
  data() {
    return {

      dropdown_font: ['Link1', 'Link2', 'Link3'],


      seed: {
        contact: {
          social: [
            {title: "facebook", to: "https://www.facebook.com", icon: "facebook-square"},
            {title: "twitter", to: "https://www.twitter.com", icon: "twitter-square"},
            {title: "linkedin", to: "https://www.linkedin.com", icon: "linkedin"},
            {title: "googleplus", to: "https://plus.google.com", icon: "google-plus-square"},
            {title: "instagram", to: "https://www.instagram.com", icon: "instagram"},

          ]
        },
        nav: [
          {title: "Logo", to: "/", active: false, src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAAmCAYAAADgIjRrAAAFZ0lEQVR4nO1cXWhcRRT+sqmtra1xUzDFKmjSiD+1WJJIUVtaSFGLD33Z4kOLIHZTVFTEmtRaivpgWkVaisKufRDEl0aKVBSkUREpSu0WRfzJQ/IkalUMiG0hGiOnd4acPZm5d/fesTvdez+47N2ZuXPPnW/OmXPOnd2WzgMz8wG8DGArgHY0FpMA3gKwE8DU+BMNlqZJMA/AfgCPe/I4eSXLeQBDHsjTFMgB2Obhg2z3QIamQc4DE22CjzJdssilfQDSgIzkFCAjOQXISE4BnJPctiDtQ+of5rmUaMMNQOEW4JH3G/ucXQdDq48D6GffNwIYdXDbGXbe4qC/EoAigDKAgST3cqbJ81uB59YB96wA7ljuqlfn6BQEEwoeyjmoCIb6LEa0D4Uzkos9wPVXBee71wE5F3PZPUyEFlSmzSdUhCwTSWRzQvI1S4AdfbPfV14NbL7JRc/OwTVCD1zeQ20eVSZam+pEy4kTknetBRaK1f3pO4FFl7no3Rn6lbmG0pQy69hHk11mRCdCYpLXXAts6p5b3rEY2N6TtHen4ESWxeDxCdB0SERyaw7Yu95eTyQvW+zFkOWFqR5RrzVHWFkt2lxU3vmMOk4pJ8m2pg+Ltjb8wdppx3CGHfWgJK4tJiJ56yrgxqX2ejLhZLY9ACdQEwxBcpgHm1cklYR33qOIPG65rizamqwFd/wqCdffkniOC+Y+NsntC4En11SXTU0DX/9SXbb5ZuC2jrh3cQapxfxcE24KrzSOKJI0JhQZ2gu2LUwTgjSTteD3HDHU1woZag3pSRabZNLQK0V2682vgF0fAdPMwFAktXttAtGTo5ORIE00ajDZBUYEXb+F8i0qidKrPicN15n6l9ZCLiNxnayi0mLezz79JRbJq5cBhVury347B7x2Ehj7HXjn2+q6vuXAvSvi3MkJogZRetlyfeXE7zNMktGIXSxlYS241tuWkXpgIrgqQ1Y3yZTkIGdLJjteOQH8NRWcH/gCOPd3df3Q3UFWrAHgAzkonBLpEJliZm5ObZoWZWZt4ZoLU80JnjCkQOsnmTRYrrHfnAGOfg/c1x0cv54F3hA5m+vagAdvr/duiUEDWm9oZDKpGjZNi9JATrLun0+oiYTrsUanacmpi2Rag6W3TKrwwqdA2+XA8+uDY+ki4PDpgGyOR/sCh+0iwuZIhUF6wZxA24SJSotyB0yTa3MG44CnPUtSzrpIJm9akvTeGHD6Z+DFDQG5dBDRZK5f/by67ZIFcz3y/xHSqelSfqDtsDlIUd6xbG8D77/fkJyJi4py/rTtzAsTXjvJFA9TXMxx/h9g/4mg4LEPgld8dNA54eh3gSPG8cBKoDsktnYIPoijNST5bWTy8kED0QVVHgXugBWZA1aLbGHYaFiL+7lMNZNMzlaraF0+BazqAEa2ALQRXm6Gp1Dqpc+qy6iPZy9OSFWvOeRt+NpWFqaWYuZxlQAZV99rfYtlkiOpqdYTpyK8/GE9kegXFJFpM8pNH9o0t/zMWaDjiuCcPOu9nwDv/pBQ5Fm0xP0FRdfBCw/Hveb2GsOTI4JcrR15Raot6VEWk8r2olXKNamWEZNsYRsDwur4pgjS8N5ITaY3STbN0wTTmnz/204JToq48Sc3zUWmoZMq8SFf+2ntGTC8AzahItrFjY3DMCDi8uFITd55F7Cj11w3/S/w+pfAoZPBuWPE1uQM1Qjd40U7PR5aba778U/gqQ+Byk/ZiPqOUJJpz5YpS3VsDNjz8WyGK4PfCCX54WMZe82AbHN9CpCRnAJkJKcAObW/yDf4KNMli5z6jw7fcDjtxLgEedfPqNTYNg9+SaD/GGZPg+VoHgD4D0S+Oy0BEwkjAAAAAElFTkSuQmCC"},
          {title: "Home", to: "/", active: true},
          {title: "Guide", to: "/", active: false},
        ],
        buttons: [
          {title: "shopping-bag", to: "/", active: true}
        ]
      }
    }
  },
  methods: {
    imageNow(val){
      return require(val);
    }
  }
}
</script>

<style scoped>
#dropdown-example{
  height: 100%;
  width: 300px;
}
</style>

<style lang="styl" scoped>
textColor = #A9B0B3;
textColorHover = black;
textColorHoverAlternative = white;
contactBackground = #282526;
headerBackground = white;

@media only screen and (min-width: 960px)
  .header
    width 100%
    height 100px
    .link
      text-decoration none
      transition color 0.4s ease
      color textColor
      &:hover
        color: textColorHover
    .active
      color textColorHover
    .hcontainer
      height 100%
      width 910px;
      margin auto
    .centered
      display flex
      flex-direction row
      justify-content center
      align-items center
    .contact
      background-color: contactBackground;
      height: 32px;
      .link:hover
        color: textColorHoverAlternative;
      .contact-list
        width 100% !important
        margin 0
        padding 0
      .contact-item
        font-family 'Roboto Condensed', sans-serif
        font-weight 700
        font-size 12px
        text-decoration none
        margin-left 3px
      .contact-context
        font-family 'Roboto Condensed', sans-serif
        font-size 12px
        color textColor
      .contact-social
        font-size 18px
        display flex
        flex-direction row
        justify-content center
        align-items center
        margin-left 10px
      .contact-icon
        height 12px
        width auto
        margin-left 10px
    .nav-main
      height: 68px;
      background-color: headerBackground;
      .nav
        height: 68px;
        margin: 0;
        padding: 0;
        .nav-bar
          height: 68px;
          margin: 0;
          padding: 0;
          .nav-item
            list-style none
            float left
            min-width 80px
            height 68px
            .nav-context
              font-family: 'Roboto Condensed', sans-serif;
              padding-right 25px
              padding-left 25px
              text-transform: uppercase;
              font-weight: 700;
              font-size: 12px;
              &:nth-child(1)
                padding-left 0
                padding-right 0
          .nav-item-right
            list-style none
            float right
            height 68px
            width 40px
          .link-item
            height 68px
            display flex
            flex-direction row
            justify-content center
            align-items center
          .nav-item-right
            margin-left 5px
            margin-right 0
            margin-top -70px
            .left 
              margin-right 30px
            .icon
              font-size: 16px;
              padding: 8px;
              border: 2px solid;
              border-radius: 26px;
</style>
