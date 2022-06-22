const apiRequest = async (url = "",operationObj = null) => {
  const responseObj = await fetch(url,operationObj)
}

export default apiRequest;