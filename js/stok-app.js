var app = new Vue({

  el: '#app',

  data: {

    upbjjList:
    [ "Jakarta", "Surabaya", "Makassar", "Padang", "Denpasar"],

    kategoriList:
    ["MK Wajib", "MK Pilihan", "Praktikum", "Problem-Based"],

    stok:
    [
        {
          kode: "EKMA4116",
          judul: "Pengantar Manajemen",
          kategori: "MK Wajib",
          upbjj: "Jakarta",
          lokasiRak: "R1-A3",
          harga: 65000,
          qty: 28,
          safety: 20,
          catatanHTML: "<em>Edisi 2024, cetak ulang</em>"
        },
        {
          kode: "EKMA4115",
          judul: "Pengantar Akuntansi",
          kategori: "MK Wajib",
          upbjj: "Jakarta",
          lokasiRak: "R1-A4",
          harga: 60000,
          qty: 7,
          safety: 15,
          catatanHTML: "<strong>Cover baru</strong>"
        },
        {
          kode: "BIOL4201",
          judul: "Biologi Umum (Praktikum)",
          kategori: "Praktikum",
          upbjj: "Surabaya",
          lokasiRak: "R3-B2",
          harga: 80000,
          qty: 12,
          safety: 10,
          catatanHTML: "Butuh <u>pendingin</u> untuk kit basah"
        },
        {
          kode: "FISIP4001",
          judul: "Dasar-Dasar Sosiologi",
          kategori: "MK Pilihan",
          upbjj: "Makassar",
          lokasiRak: "R2-C1",
          harga: 55000,
          qty: 2,
          safety: 8,
          catatanHTML: "Stok <i>menipis</i>, prioritaskan reorder"
        }
      ],

    selectedUPBJJ: '',
    selectedKategori: '',

    sortBy: '',

    showWarning: false,
    showEmpty: false,

    newData: {

      kode: '',
      judul: '',
      kategori: '',
      upbjj: '',
      lokasiRak: '',
      harga: '',
      qty: '',
      safety: ''

    }

  },

  computed: {

    kategoriFiltered(){

      var vm = this

      if(vm.selectedUPBJJ == ''){

        return vm.kategoriList

      }

      return vm.kategoriList

    },

    filteredData(){

      var vm = this

      var data = vm.stok

      if(vm.selectedUPBJJ != ''){

        data = data.filter(function(item){

          return item.upbjj ==
          vm.selectedUPBJJ

        })

      }

      if(vm.selectedKategori != ''){

        data = data.filter(function(item){

          return item.kategori ==
          vm.selectedKategori

        })

      }

      if(vm.showWarning){

        data = data.filter(function(item){

          return item.qty <
          item.safety

        })

      }

      if(vm.showEmpty){

        data = data.filter(function(item){

          return item.qty == 0

        })

      }

      if(vm.sortBy == 'judul'){

        data.sort(function(a,b){

          return a.judul.localeCompare(
            b.judul
          )

        })

      }

      if(vm.sortBy == 'qty'){

        data.sort(function(a,b){

          return a.qty - b.qty

        })

      }

      if(vm.sortBy == 'harga'){

        data.sort(function(a,b){

          return a.harga - b.harga

        })

      }

      return data

    }

  },

  methods: {

    resetFilter(){

      this.selectedUPBJJ = ''
      this.selectedKategori = ''
      this.sortBy = ''

      this.showWarning = false
      this.showEmpty = false

    },

    tambahData(){

      if(
        this.newData.kode == '' ||
        this.newData.judul == ''
      ){

        alert(
          'Data wajib diisi'
        )

        return

      }

      this.stok.push({

        kode: this.newData.kode,
        judul: this.newData.judul,
        kategori:
        this.newData.kategori,

        upbjj:
        this.newData.upbjj,

        lokasiRak:
        this.newData.lokasiRak,

        harga:
        this.newData.harga,

        qty:
        this.newData.qty,

        safety:
        this.newData.safety,

        catatanHTML:
        '<b>Data Baru</b>'

      })

      alert(
        'Data berhasil ditambahkan'
      )

    }

  },

  watch: {

    selectedUPBJJ(){

      this.selectedKategori = ''

    },

    showEmpty(newValue){

      if(newValue){

        this.showWarning = false

      }

    }

  }

})