import keysToCamelCase from "./keyToCamelCase";

const TEST_OBJECT = {
  id: 0,
  nome_instituicao: 'teste',
  categoria_psp: [
    {
      teste_X: "teste"
    }
  ],
  data_credenciamento: {
    intern_Item: 1
  },
  nome: 'teste',
  status: 'teste',
  posicao: 'teste',
}

const response = keysToCamelCase(TEST_OBJECT)

describe('Test keysToCamelCase', () => {
  it('nome_instituicao should be nomeInstituicao', () => {
    expect(response.nomeInstituicao).toBeDefined();
    expect(response.nome_instituicao).toBeUndefined();
  });
  it('categoria_psp should be categoriaPsp', () => {
    expect(response.categoriaPsp).toBeDefined();
    expect(response.categoria_psp).toBeUndefined();
  });
  it('categoriaPsp first child need to have testeX parameter', () => {
    expect(response.categoriaPsp[0].testeX).toBeDefined();
    expect(response.categoriaPsp[0].teste_X).toBeUndefined();
  });
  it('data_credenciamento should be dataCredenciamento', () => {
    expect(response.dataCredenciamento).toBeDefined();
    expect(response.data_credenciamento).toBeUndefined();
  });
  it('dataCredenciamento should have nested parameter internItem', () => {
    expect(response.dataCredenciamento.internItem).toBeDefined();
    expect(response.dataCredenciamento.intern_Item).toBeUndefined();
  });
})