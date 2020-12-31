<template>
  <d-container>
    <c-stack my="24" spacing="12">
      <c-heading as="h1" font-size="8rem" text-align="center">
        Dark
      </c-heading>
      <c-text font-size="3xl" text-align="center">
        An opinionated, dark-themed Nuxt.js &amp; Chakra UI Vue GitHub
        repository template
      </c-text>
      <c-text text-align="center">
        Hit the ground running with one <c-code>yarn install</c-code>
      </c-text>

      <c-divider />

      <d-container>
        <c-heading font-size="2xl" mb="4" text-align="center">
          How to use
        </c-heading>
        <c-list as="ol" style-type="decimal" list-style-position="initial">
          <c-list-item>
            Generate a repository with this template by clicking on
            <c-link
              is-external
              text-decoration="underline"
              href="https://github.com/codebender828/dark.nuxt/generate"
            >
              github.com/codebender828/dark.nuxt/generate
            </c-link>
          </c-list-item>
          <c-list-item>Clone your new repository</c-list-item>
          <c-list-item>Run <c-code>yarn install</c-code></c-list-item>
          <c-list-item>
            Hit the ground running with
            <c-link
              is-external
              text-decoration="underline"
              href="https://nuxtjs.org"
            >
              Nuxt.js
            </c-link>
            &
            <c-link
              is-external
              text-decoration="underline"
              href="https://vue.chakra-ui.com"
            >
              Chakra UI Vue
            </c-link>
            with the dark theme as the default
          </c-list-item>
        </c-list>
      </d-container>

      <c-divider />

      <d-container>
        <c-heading font-size="2xl" mb="4" text-align="center">
          Chakra + Nuxt = 💚
        </c-heading>
        <c-stack>
          <c-text>
            After getting started with this GitHub repo template you have Chakra
            UI Vue ready to go and configured for Nuxt.js.
          </c-text>
          <c-text>
            The dark theme is configured to be the inital color mode.
          </c-text>
          <c-text>
            The <em>full arsenal</em> of Chakra UI Vue's features and components
            is at your disposal in this Nuxt.js app and configurable to your
            wishes.
          </c-text>

          <c-text pb="2">
            Behold! Chakra UI buttons:
          </c-text>
          <c-stack pb="2" spacing="4" direction="row" align="center">
            <c-button size="xs">
              Button
            </c-button>
            <c-button variant-color="green" size="sm">
              Button
            </c-button>
            <c-button variant-color="indigo" size="md">
              Button
            </c-button>
            <c-button variant-color="pink" size="lg">
              Button
            </c-button>
          </c-stack>

          <c-text pb="2">
            Noice! A Chakra UI slider:
          </c-text>
          <c-slider color="pink" :default-value="24">
            <c-slider-track />
            <c-slider-filled-track />
            <c-slider-thumb />
          </c-slider>

          <c-text pt="4" pb="2">
            Cool! Chakra UI switches:
          </c-text>
          <c-stack align="center" is-inline>
            <c-switch color="green" size="sm" />
            <c-switch color="indigo" size="md" />
            <c-switch color="red" size="lg" />
          </c-stack>

          <c-text pt="4" pb="2">
            Damn, yo! Composed Chakra UI components for displaying data: :
          </c-text>

          <c-flex>
            <c-avatar
              src="http://bit.ly/codebender828"
              name="Jonathan Bakebwa"
            />
            <c-box ml="3">
              <c-text font-weight="bold">
                Jonathan Bakebwa
                <c-badge ml="1" variant-color="green">
                  New
                </c-badge>
              </c-text>
              <c-text font-size="sm">
                UI Engineer, creator of Chakra UI Vue
              </c-text>
            </c-box>
          </c-flex>

          <c-text py="2">
            See the code for the examples above in the
            <c-link
              href="https://github.com/codebender828/dark.nuxt/blob/main/pages/index.vue"
              is-external
              text-decoration="underline"
            >
              source code
            </c-link>
            .
          </c-text>
        </c-stack>
      </d-container>

      <c-divider />

      <d-container>
        <c-heading font-size="2xl" mb="4" text-align="center">
          Other Tech 🦾
        </c-heading>

        <c-stack>
          <c-text>
            Besides the main tech stack of Nuxt and Chakra UI Vue, this template
            also comes with
            <c-link
              href="https://prettier.io"
              is-external
              text-decoration="underline"
            >
              Prettier
            </c-link>,
            <c-link
              href="https://eslint.org/"
              is-external
              text-decoration="underline"
            >
              ELint
            </c-link>,
            <c-link
              href="https://github.com/okonet/lint-staged"
              is-external
              text-decoration="underline"
            >
              lint-staged
            </c-link>,
            <c-link
              href="https://typicode.github.io/husky"
              is-external
              text-decoration="underline"
            >
              Husky
            </c-link>,
            <c-link
              href="https://jestjs.io/"
              is-external
              text-decoration="underline"
            >
              Jest
            </c-link>, and
            <c-link
              href="https://vue-test-utils.vuejs.org/"
              is-external
              text-decoration="underline"
            >
              Vue Test Utils
            </c-link>.
          </c-text>
          <c-text>
            Pre-configured with sensible defaults provided by the community or
            the creators of the tools.
          </c-text>
        </c-stack>
      </d-container>

      <c-divider />

      <c-text mt="1" text-align="center">
        💚 Inspired by:
        <c-link
          href="https://dark.ka.vercel.app/"
          is-external
          text-decoration="underline"
        >
          Chakra UI Dark React
        </c-link>
        &bull;
        <c-link
          href="https://github.com/kahlil/dark"
          is-external
          text-decoration="underline"
        >
          github/kahlil/dark
        </c-link>
        &bull;
        <c-link
          href="https://twitter.com/kahliltweets"
          is-external
          text-decoration="underline"
        >
          @kahliltweets
        </c-link>
      </c-text>

      <c-divider />
      <c-text text-align="center">
        Made with ✨ by
        <c-link
          href="https://www.jbakebwa.dev"
          is-external
          text-decoration="underline"
        >
          Jonathan Bakebwa
        </c-link>
        &bull;
        <c-link
          href="https://github.com/codebender828/dark.nuxt"
          is-external
          text-decoration="underline"
        >
          github/codebender828/dark.nuxt
        </c-link>
        &bull;
        <c-link
          href="https://twitter.com/codebender828"
          is-external
          text-decoration="underline"
        >
          @codebender828
        </c-link>
      </c-text>
    </c-stack>
  </d-container>
</template>
