import React from 'react';
import { CustomLink } from "./CustomLink";

export function NavigationBar() {
  return (
    <nav>
      <CustomLink to='/' label="О нас" />
      <CustomLink to='/ustav' label="Устав" />
      <CustomLink to='/otcet' label="Отчёты" />
      <CustomLink to='/arhiv' label="Архив" />
      <CustomLink to='/novosti' label="Новости" />
      <CustomLink to='/publicatii' label="Публикации" />
      <CustomLink to='/fotografii' label="Фотографии" />
      <CustomLink to='/deiat' label="Деятельность" />
      <CustomLink to='/druzia' label="Наши друзья" />
    </nav>
  )
}

