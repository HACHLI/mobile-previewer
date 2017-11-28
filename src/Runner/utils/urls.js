const BASE_URL = 'http://localhost:3030'

export const buildUrl = (datasourceId, tableId, id=null) => {
  let collectionUrl = `${BASE_URL}/databases/${datasourceId}/tables/${tableId}`

  if (!id) { return collectionUrl }

  return `${collectionUrl}/${id}`
}

export const loginUrl = datasourceId => {
  return `${BASE_URL}/databases/${datasourceId}/sessions`
}
