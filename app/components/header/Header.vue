<template>
  <header class="bg-zinc-100 dark:bg-zinc-700 dark:border-b-zinc-600 py-8">
    <UContainer class="flex items-center">
      <nav>
        <ul class="flex gap-2">
          <li>
            <headerLink to="/" label="Home" />
          </li>
          <li>
            <headerLink to="/pokemon" label="Pokemon" />
            <img width="100" src="/images/pokemon-logo.svg" alt="Pokémon Logo" />
          </li>
          <li>
            <headerLink to="/rickandmorty" label="Rick & Morty" />
            <img width="100" src="/images/rickandmorty-logo.png" alt="Rick & Morty Logo" />
          </li>
        </ul>
      </nav>
      <div class="ml-auto">
        <UButton to="https://github.com/spend-cloud-tom/front-end-boilerplate" icon="mdi:github" color="blue" label="GitHub repository" variant="outline" />
      </div>
    </UContainer>
  </header>
</template>
