<template>
  <header class="bg-zinc-100 border-b border-b-zinc-200 dark:bg-zinc-700 dark:border-b-zinc-600 py-8">
    <UContainer class="flex items-center">
      <nav>
        <ul class="flex gap-2">
          <li>
            <headerLink to="/" label="Home" />
          </li>
          <li>
            <headerLink to="/pokemon" label="Pokemon" />
          </li>
          <li>
            <headerLink to="/rickandmorty" label="Rick & Morty" />
          </li>
        </ul>
      </nav>
      <div class="ml-auto">
        <UButton to="https://github.com/spend-cloud-tom/front-end-boilerplate" icon="mdi:github" color="blue" label="GitHub repository" variant="outline" />
      </div>
    </UContainer>
  </header>
</template>
