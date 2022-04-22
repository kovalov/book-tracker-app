const Modal = () => {
  const container = document.querySelector('[data-modal]');
  const openButton = document.querySelector(
    '[data-modal-button="open"]'
  );
  const closeButton = document.querySelector(
    '[data-modal-button="close"]'
  );
  const submitButton = document.querySelector(
    '[data-modal-button="submit"]'
  );
  const form = document.querySelector('[data-modal-form]');

  const toggle = () => {
    container.classList.toggle('hidden');
  };

  const getInputsData = () => ({
    name: form.name.value,
    author: form.author.value,
    totalPages: Number(form.totalPages.value),
    status: form.status.value,
  });

  const handleEvents = () => {
    openButton.addEventListener('click', () => {
      toggle();
    });

    closeButton.addEventListener('click', () => {
      toggle();
      form.reset();
    });

    submitButton.addEventListener('click', () => {
      const formData = getInputsData();

      console.log(formData);

      form.reset();
      toggle();
    });
  };

  const init = () => {
    handleEvents();
  };

  return { init };
};

export default Modal;
