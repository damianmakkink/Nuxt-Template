import makeAlgoliaClient from './lib/makeAlgoliaClient'

export default function useAlgoliaClient () {
  const config = useRuntimeConfig()

  return makeAlgoliaClient(
    config.public.algoliaAppId,
    config.public.algoliaApikey,
    config.public.algoliaIndexName
  )
}
