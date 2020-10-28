import {
  buttonTestkitFactory,
  CardHeaderTestkit,
  checkboxTestkitFactory,
  dropdownTestkitFactory,
  InputTestkit,
} from 'wix-style-react/dist/testkit/puppeteer';

const nameInput = async () =>
  await InputTestkit({
    page,
    dataHook: 'name-input',
  });

const termsOfUseCheckbox = async () =>
  await checkboxTestkitFactory({
    page,
    dataHook: 'form-tou',
  });

const submitButton = async () =>
  await buttonTestkitFactory({
    page,
    dataHook: 'form-submit',
  });

const submittedInfoCard = async () =>
  await CardHeaderTestkit({
    page,
    dataHook: 'form-submitted-info-header',
  });

describe('WSR Form', () => {
  it('should fill the form, submit and display the submission', async () => {
    await page.goto(app.getUrl('/'));

    await (await nameInput()).enterText('ido');
    await (await termsOfUseCheckbox()).click();

    expect(await (await submitButton()).isButtonDisabled()).toBeFalsy();

    await (await submitButton()).click();

    expect(await (await submittedInfoCard()).exists()).toBeTruthy();
  });

  it('should fill the form partially without required field (name), submit should be disabled and submission data should not appear.', async () => {
    await page.goto(app.getUrl('/'));

    await (await termsOfUseCheckbox()).click();

    expect(await (await submitButton()).isButtonDisabled()).toBeTruthy();

    await (await submitButton()).click();

    expect(await (await submittedInfoCard()).exists()).toBeFalsy();
  });

  it('should fill the form partially without required field (ToU), submit should be disabled and submission data should not appear.', async () => {
    await page.goto(app.getUrl('/'));

    await (await nameInput()).enterText('ido');

    expect(await (await submitButton()).isButtonDisabled()).toBeTruthy();

    await (await submitButton()).click();

    expect(await (await submittedInfoCard()).exists()).toBeFalsy();
  });
});
