(() => {
  // Ejemplo
  //  files to evaluate
  // const fs = [
  //   { id: 1, f: false },
  //   { id: 2, f: false },
  //   { id: 3, f: true },
  //   { id: 4, f: false },
  //   { id: 5, f: false },
  //   { id: 7, f: true },
  // ];
  const filesToEvaluate = [
    { file_id: 1, flag: false },
    { file_id: 2, flag: false },
    { file_id: 3, flag: true },
    { file_id: 4, flag: false },
    { file_id: 5, flag: false },
    { file_id: 7, flag: true },
  ];

  // files to delete
  // const files = fs.map((f) => f.f);
  const files = filesToEvaluate.map((file) => file.flag);

  class AbstractUser {}
  class UserMixin {}
  class UserImplementation {}
  interface IUser {}

  // Mejor
  class User {}
  interface User {}

  // Todo: Tarea

  //- today
  const ddmmyyyy = new Date();
  const today = new Date();

  // elapsed time in days
  const d: number = 23;
  const elapsedTimeDays: number = 23;

  // number of files in directory
  const dir = 33;
  const numberFilesInDirectory = 33;

  // first name
  const nombre = 'Pier';
  const firstName = 'Pier';

  // last name
  const apellido = 'Slabs';
  const Last_name = 'Slabs';

  // days since modification
  const dsm = 12;
  const daysSinceLastUpdate = 12;

  // max classes per student
  const max = 6;
  const maxClassesStundent = 6;
})();
