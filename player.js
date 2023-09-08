class Player {
  constructor(nama, x, y, warna) {
    this.nama = nama
    this.x = x
    this.y = y
    this.d = 50
    this.kecepatan = width / 20
    this.warna = color(warna)
    this.menang = false
  }
  
  gambar() {
    fill(this.warna)
    ellipse(this.x, this.y, this.d, this.d)
  }
  
  loncat(sound) {
    sound.play()
    this.x += this.kecepatan
    this.kecepatan /= 1.001
  }
  
  finish(garis) {
    return this.x + this.d/2 > garis
  }
}