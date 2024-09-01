import { describe, test, expect } from 'vitest'
import makeAlgoliaClient from '../makeAlgoliaClient'

describe('makeAlgoliaClient', () => {
  test('should throw an error when missing appId', () => {
    // Call makeAlgoliaClient without appId
    const createClientWithoutAppId = () => makeAlgoliaClient(null, 'mockApiKey', 'mockIndexName')

    expect(createClientWithoutAppId).toThrowError('An app ID must be configured for the Algolia client')
  })

  test('should throw an error when missing apiKey', () => {
    // Call makeAlgoliaClient without apiKey
    const createClientWithoutApiKey = () => makeAlgoliaClient('mockAppId', null, 'mockIndexName')

    expect(createClientWithoutApiKey).toThrowError('An API key must be configured for the Algolia client')
  })

  test('should throw an error when missing searchIndexName', () => {
    // Call makeAlgoliaClient without searchIndexName
    const createClientWithoutIndexName = () => makeAlgoliaClient('mockAppId', 'mockApiKey', null)

    expect(createClientWithoutIndexName).toThrowError('A product index name must be configured for the Algolia client')
  })
})
