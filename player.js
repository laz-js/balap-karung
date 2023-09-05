class Player {
  constructor(nama, x, y, warna) {
    this.nama = nama
    this.x = x
    this.y = y
    this.d = 50
    this.kecepatan = 15
    this.warna = color(warna)
    this.menang = false
  }
  
  gambar() {
    fill(this.warna)
    ellipse(this.x, this.y, this.d, this.d)
  }
  
  loncat() {
    this.x += 5 + this.kecepatan
    this.kecepatan /= 1.01
  }
  
  finish(garis) {
    return this.x + this.d/2 > garis
  }
}
