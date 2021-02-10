let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Axis [083173108368]
│ • Three [0895332550102]
│ • Gopay [083173108368]
╰─「 Terima Kasih 」



`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
