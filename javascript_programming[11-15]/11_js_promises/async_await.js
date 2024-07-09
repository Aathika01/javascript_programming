const square = async function(n) {
    return n * n
  }
  
  async function main() {
    const value = await square(2)
    console.log(value) // 4
  }
  
  main()