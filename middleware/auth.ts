export default defineNuxtRouteMiddleware((to) => {
  const userStore = useUserStore()

  if (!userStore.currentUser && to.path !== '/login') {
    return navigateTo('/login')
  }
})
