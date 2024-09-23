<template>
  <header class="light:bg-white dark:bg-grey-800 dark:border-b-zinc-600 py-8">
    <UContainer class="flex items-center">
      <nav>
        <ul class="flex gap-2">
          <li>
            <headerLink to="/" label="Home" />
          </li>
          <li>
            <NuxtLink to="/pokemon">
              <img width="100" src="/images/pokemon-logo.svg" alt="Pokémon Logo" />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/rickandmorty">
              <img width="100" src="/images/rickandmorty-logo.png" alt="Rick & Morty Logo" />
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="ml-auto">
        <UButton to="https://github.com/spend-cloud-tom/front-end-boilerplate" icon="mdi:github" color="blue"
          label="GitHub repository" variant="outline" />
      </div>
    </UContainer>
  </header>
</template>
