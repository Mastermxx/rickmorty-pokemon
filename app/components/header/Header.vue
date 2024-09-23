<template>
  <header class="light:bg-white dark:bg-grey-800 dark:border-b-zinc-600 py-8">
    <UContainer class="flex items-center">
      <nav class="flex flex-col justify-center items-center">
        <NuxtLink to="/" data-cy="home-button">
          <button class="m-0 mt-2 p-2 bg-gray-800 text-white rounded-lg">
            Home
          </button>
        </NuxtLink>
        <ul class="flex gap-2">
          <li>
            <NuxtLink to="/pokemon" data-cy="pokemon-button">
              <img width="100" src="/images/pokemon-logo.svg" alt="Pokémon Logo" class="pt-2" />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/rickandmorty" data-cy="rickmorty-button">
              <img width="100" src="/images/rickandmorty-logo.png" alt="Rick & Morty Logo" />
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </UContainer>
  </header>
</template>
