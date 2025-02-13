const alunos =[
    {nome: 'Othmcu', nota: 2},
    {nome: 'Maias', nota: 5},
    {nome: 'Keotoe', nota: 4},
    {nome: 'Huak', nota: 8},
    {nome: 'Meyfe', nota: 7},
    {nome: 'Fyadourond', nota: 1},
    {nome: 'Halsu', nota: 6},
    {nome: 'Mauhhakh', nota: 9},
];

const aprovaAlunos = (alunos) => alunos.filter(aluno => aluno.nota >= 6);

const aprovados = aprovaAlunos(alunos);

console.log(aprovados)