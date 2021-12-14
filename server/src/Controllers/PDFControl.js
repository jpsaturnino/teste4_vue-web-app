const pdf = require('pdf-parse');
const fs = require('fs')
const caminho = "src/Assets/padrao-tiss_componente-organizacional_202111.pdf"

module.exports = {
  async buscarTexto(req, res) {
    const { texto } = req.body;
    const arquivo_pdf = fs.readFileSync(caminho);

    pdf(arquivo_pdf).then(function (data) {
      linhas_pdf = data.text.split("\n");
      let linhas_encontradas = [];
      for (i in linhas_pdf) {
        if (linhas_pdf[i].includes(texto))
          linhas_encontradas.push(linhas_pdf[i - 1] + linhas_pdf[i])
      };
      return res.json(linhas_encontradas);
    });
  }
}