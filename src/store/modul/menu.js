module.exports = {
  state: {
    files: {
      html: 'mdi-language-html5',
      js: 'mdi-nodejs',
      json: 'mdi-code-json',
      md: 'mdi-language-markdown',
      pdf: 'mdi-file-pdf',
      png: 'mdi-file-image',
      txt: 'mdi-file-document-outline',
      xls: 'mdi-file-excel',
    },
    items: [
      {
        name: 'Skripsi',
        children: [
          {
            name: 'Pengumpulan Berkas untuk Sidang Akhir Skripsi',
            file: 'txt',
            path: '/pengumpulanberkas'
          },
          {
            name: 'Pengajuan Sidang Akhir Skripsi',
            file: 'txt',
            path: '/'
          },
          {
            name: 'Pengumpulan Manuskrip Final Skripsi',
            file: 'txt',
            path: '/'
          },
          {
            name: 'Pengumpulan Lembar Pengesahan Skripsi',
            file: 'txt',
            path: '/'
          },
        ],
      },
    ],
  },
  getters: {
    getItems: state => state.items,
    getFiles: state => state.files,
  }
}