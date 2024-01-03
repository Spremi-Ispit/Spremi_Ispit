export const supporetdTypes = {
  //documents
  pdf: 'pdf',
  doc: 'doc',
  docx: 'docx',
  //videos
  mp4: 'mp4',
  //images
  jpg: 'jpg',
  jpeg: 'jpeg',
  png: 'png',
  //text
  txt: 'txt',
};

export class FilesSelector {
  #getFileTypeFromFileName(fileName) {
    return fileName.split('.').pop();
  }

  #getFileType(file) {
    return this.#getFileTypeFromFileName(file.name).toLowerCase();
  }

  #checkFileType(file, ...fileTypes) {
    const type = this.#getFileType(file);

    if (fileTypes.some((fileType) => fileType.includes(type))) {
      return true;
    }

    return false;
  }

  isFileDoc(file) {
    return this.#checkFileType(file, supporetdTypes.doc, supporetdTypes.docx);
  }

  isFilePDF(file) {
    return this.#checkFileType(file, supporetdTypes.pdf);
  }

  isFileVideo(file) {
    return this.#checkFileType(file, supporetdTypes.mp4);
  }

  isFileImage(file) {
    return this.#checkFileType(
      file,
      supporetdTypes.jpeg,
      supporetdTypes.jpg,
      supporetdTypes.png
    );
  }

  isFileText(file) {
    return this.#checkFileType(file, supporetdTypes.txt);
  }
}
