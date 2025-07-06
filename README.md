# 🧪 Proyecto Final – Playwright con TypeScript

Framework de automatización usando:

- ✅ Playwright + TypeScript
- ✅ Page Object Model (POM)
- ✅ Fixtures personalizados
- ✅ Datos dinámicos con Faker
- ✅ Validación de API (cuentas)

---

## 🚀 Instrucciones

1. Clonar el repositorio:

```bash
git clone git@github.com:EduSQLI/PwEgonzalezExamenFinal.git
cd PwEgonzalezExamenFinal
```

2. Instalar dependencias y navegadores:

```bash
npm install
```

3. Ejecutar los tests:

```bash
npx playwright test
```

---

## 📁 Estructura

```
tests/
├── fixtures/         → Configuración e inyección de dependencias
├── model/            → Modelos de usuario y JSON
├── pageobject/       → Clases POM
├── services/         → Validaciones de API
└── spec/             → Tests principales
```

---

## 🧪 Flujo Principal

```ts
// Registro → Logout → Login → Validación de API
test('registration, login and api validation', async ({ page, user, pageManager, waitForAccountsApiSuccess }) => {
  await pageManager.getHomePage().registerLinkClick();
  await pageManager.getRegistrationPage().fillForm(user);
  await pageManager.getRegistrationPage().submitForm();

  await expect(page.locator('#rightPanel')).toContainText('successfully');
  await page.getByRole('link', { name: 'Log Out' }).click();

  await pageManager.getHomePage().login(user.username, user.password);
  await expect(page.locator('#showOverview')).toContainText('Accounts Overview');

  const apiCheck = waitForAccountsApiSuccess(page);
  await apiCheck;
});
```

---

## 💡 Scripts útiles

```bash
npx playwright show-report   # Ver resultados en HTML
npx playwright codegen       # Inspector visual
```

---

> Examen final para automatización PW.
