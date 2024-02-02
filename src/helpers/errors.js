export class FsOperationError extends Error {
  constructor(originalErrorMessage) {
    super(originalErrorMessage);
    this.originalErrorMessage = originalErrorMessage;
    this.name = 'FS operation failed';
  }
}
