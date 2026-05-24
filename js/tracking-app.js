var trackingApp = new Vue({

  el: '#trackingApp',

  data: {

    pengirimanList:[
        { kode: "REG", nama: "Reguler (3-5 hari)" },
        { kode: "EXP", nama: "Ekspres (1-2 hari)" }
      ],

    paketList:[
        { kode: "PAKET-UT-001", nama: "PAKET IPS Dasar", isi: ["EKMA4116","EKMA4115"], harga: 120000 },
        { kode: "PAKET-UT-002", nama: "PAKET IPA Dasar", isi: ["BIOL4201","FISIP4001"], harga: 140000 }
      ],

    trackingList: [
      {
        nomor: "DO2025-0001",
        nim: "123456789",
        nama: "Rina Wulandari",
        status: "Dalam Perjalanan",
        ekspedisi: "JNE",
        tanggalKirim: "2025-08-25",
        paket: "PAKET-UT-001",
        total: 120000,
        perjalanan: [
          { waktu: "2025-08-25 10:12:20", keterangan: "Penerimaan di Loket: TANGSEL" },
          { waktu: "2025-08-25 14:07:56", keterangan: "Tiba di Hub: JAKSEL" },
          { waktu: "2025-08-26 08:44:01", keterangan: "Diteruskan ke Kantor Tujuan" }
        ]
      }
    ],

    selectedPaket: '',

    form: {
      nim: '',
      nama: '',
      ekspedisi: ''
    }
  },

  computed: {

    paketDipilih(){

      var vm = this

      return vm.paketList.find(
        function(item){

          return vm.selectedPaket
          .includes(item.kode)

        }
      )

    }

  },

  methods: {

    generateDO(){

      var nomor =
      this.trackingList.length + 1

      return 'DO2026-' +
      String(nomor)
      .padStart(3,'0')

    },

    tambahDO(){

      if(
        this.form.nim == '' ||
        this.form.nama == ''
      ){

        alert(
          'Data wajib diisi'
        )

        return

      }

      this.trackingList.push({

        nomor:
        this.generateDO(),

        nim: this.form.nim,

        nama: this.form.nama,

        ekspedisi:
        this.form.ekspedisi,

        paket:
        this.selectedPaket,

        total:
        this.paketDipilih.harga

      })

      alert(
        'DO berhasil dibuat'
      )

    }

  },

  watch: {

    selectedPaket(newValue){

      console.log(
        'Paket dipilih:',
        newValue
      )

    },

    trackingList: {

      handler(){

        console.log(
          'Tracking bertambah'
        )

      },

      deep: true

    }

  }

})