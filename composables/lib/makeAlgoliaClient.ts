import algoliasearch from 'algoliasearch'
import type { SearchClient, SearchIndex } from 'algoliasearch'

export default function makeAlgoliaClient (
  appId: string,
  apiKey: string,
  indexName: string
) {
  if (!appId) {
    throw Error('An app ID must be configured for the Algolia client')
  }
  if (!apiKey) {
    throw Error('An API key must be configured for the Algolia client')
  }
  if (!indexName) {
    throw Error('An index name must be configured for the Algolia client')
  }

  const client: SearchClient = algoliasearch(
    appId,
    apiKey
  )

  const index: SearchIndex = client.initIndex(indexName)

  return index
}
