class Player {
  constructor(nama, x, y, warna, karakter) {
    this.nama = nama
    this.x = x
    this.y = y
    this.size = 120
    this.kecepatan = width / (150 - this.size)
    this.warna = warna
    this.karakter = karakter
  }
  
  gambar() {
    image(this.karakter, this.x, this.y, this.size, this.size)
  }
  
  loncat(sound) {
    sound.play()
    this.x += this.kecepatan
    this.kecepatan /= 1.001
  }
  
  finish(garis) {
    return this.x + this.size/1.5 > garis
  }
}
