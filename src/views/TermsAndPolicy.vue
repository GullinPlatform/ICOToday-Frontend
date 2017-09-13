<template>
    <div class="container padding-bottom-3x mb-1">
        <div class="row">
            <div class="col-lg-9 col-md-8">
                <h2 class="mb-4">Dev Environment Setup</h2>
                <div class="alert alert-default mb-4"><strong>Please note:</strong> this step is absolutely optional. It aims for advanced user who want to speed up development process with professional grade Front-End toolset shiped with Unishop. If you are not familiar with these tools and have no time to dive in you can still use plain HTML / CSS / JS to customize Unishop. Files you need are located inside <code>Unishop/dist</code> folder. In this case you can skip this and next sections. Happy coding :)</div>
                <p>Unishop is built using modern development toolset.</p><img class="d-block mt-4 mb-4" src="../img/docs/technologies.png" alt="Technologies">
                <dl>
                    <dt>Node.js <a href="https://nodejs.org/en/" target="_blank">Official website</a></dt>
                    <dd>Is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.</dd>
                    <dt>Grunt <a href="https://gruntjs.com/" target="_blank">Official website</a></dt>
                    <dd>The JavaScript task runner. It helps with performing repetitive tasks like minification, compilation, unit testing, linting, etc. This is possible thanks to extensive Grunt Plugins library.</dd>
                    <dt>Sass (Syntactically Awesome Style Sheets) <a href="http://sass-lang.com/" target="_blank">Official website</a></dt>
                    <dd>Sass is a scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). It is the most mature, stable, and powerful professional grade CSS extension language in the world. Sass gives you the power of variables, mixins, functions, etc.</dd>
                    <dt>Pug (former Jade) <a href="https://pugjs.org/api/getting-started.html" target="_blank">Official website</a></dt>
                    <dd>Pug is a high performance Node.js Templating Engine. Just like SASS, Pug is a prepocessor and, as such it helps you accomplishing tasks like wrapping away repetitive work by providing features not available in plain HTML like variables, includes, mixins, functions, etc.</dd>
                    <dt>Bootstrap 4 <a href="http://getbootstrap.com" target="_blank">Official website</a></dt>
                    <dd>Latest version of the most popular HTML, CSS, and JS framework in the world. Unishop is built on Bootstrap 4 and heavily depends on it. Unishop has all BS4 components + bunch of own plugins and components.</dd>
                </dl>
                <p class="mb-4">This section will explain how to setup professional Front-End development environment for fast and smooth Unishop customization using these technologies.</p>
                <h3>Text Editor and Terminal (Command Line)</h3>
                <p>
                    You can use any text editor at your disposal and available Command line tool (Command Prompt for Windows or Terminal on MacOS). My personal preference is <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code.</a> It is free, has great buil-in terminal (console), built-in git client, debugging, huge extensions library and available for MacOS, Windows, Linux.</p>
                <h3>Installing Node.ja and npm</h3>
                <p>In order to be able to setup Unishop development environment you will need to install Node.js and its Package Manager (npm).</p>
                <p>
                    Node.js is absolutely free and available for download via its official website for MacOS, Windows, Linux systems. <a href="https://nodejs.org/en/" target="_blank">Download Node.js and npm here.</a></p>
                <p>Learn more about Node Package Manager and available packages here: <a href="https://www.npmjs.com" target="_blank">https://www.npmjs.com</a></p>
                <h3>Installing packages necessary for Unishop development</h3>
                <p>When Node.js and npm is installed you are ready to install all dependencies necessary for Unishop development.</p>
                <u class="d-block mb-3">Inside your command line tool type:</u><kbd class="d-inline-block mb-3">npm install</kbd>
                <p>This will start the process of installing all dependencies which is listed inside <code>Unishop/package.json</code> file. Wait until installation is finished and jump to the next section <a href="working-with-grunt.html">Working with Grunt.</a></p>
            </div>
            <div class="col-lg-3 col-md-4">
                <!-- Docs Side Menu-->
                <div class="padding-top-2x hidden-md-up"></div>
                <nav class="list-group"><a class="list-group-item list-group-item-action active" href="dev-setup.html">Dev Environment Setup</a><a class="list-group-item list-group-item-action" href="working-with-grunt.html">Working With Grunt</a><a class="list-group-item list-group-item-action" href="project-structure.html">Project Structure</a><a class="list-group-item list-group-item-action" href="using-preprocessors.html">Using Preprocessors (Pug &amp; Sass)</a><a class="list-group-item list-group-item-action" href="colors.html">Global Colors</a><a class="list-group-item list-group-item-action" href="components.html">Components</a><a class="list-group-item list-group-item-action" href="utility-classes.html">Utility Classes</a><a class="list-group-item list-group-item-action" href="font-icons.html">Font Icons</a><a class="list-group-item list-group-item-action" href="credits.html">Sources and Credits</a>
                </nav>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'TermsAndPolicy',
    data () {
      return {
        loaded: false,
      }
    },
    methods: {},
    computed: {
      me () {
        return this.$store.getters.self
      },
      current_team () {
        return this.$store.getters.current_team
      },
      current_team_members () {
        return this.$store.getters.current_team_members
      }
    },
    beforeMount () {
//      // My ICO Projects
//      this.$store.dispatch('getTeam', this.$route.params.id)
//        .then(() => {
//          this.loaded = true
//        })
//        .catch(() => {
//
//        })
    }
  }
</script>