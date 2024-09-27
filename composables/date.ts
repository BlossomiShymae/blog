export const formatDate = (timestamp: number) => {
  return new Date(timestamp * 1000).toLocaleDateString('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}