import React, { Children, Fragment } from "react";
import { IntlProvider } from "react-intl";
import { Locales } from "./Locales.js";

const Provider =({Children, locale}) =>{
<IntlProvider
  locale={locale}
  textComponent={Fragment}
  messages={messages[locale]}
  >
    {Children}
  </IntlProvider>
}