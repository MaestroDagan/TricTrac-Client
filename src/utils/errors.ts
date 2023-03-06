export class BadRequestError extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = 'BadRequestError';
  }
}

export function createBadRequestPage(document: Document, message: string) {
  const elements = document.querySelectorAll('*:not(body):not(head):not(html)');
  elements.forEach((element) => element.remove());

  const msg = document.createElement('h1');
  msg.innerHTML = message;
  document.body.appendChild(msg);

  const img = document.createElement('img');
  img.src = 'https://http.cat/400';
  document.body.appendChild(img);
}
