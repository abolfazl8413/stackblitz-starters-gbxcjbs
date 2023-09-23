import React, { useState } from 'react';
import { StrictMode } from 'react';
import Button from '@mui/material/Button';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const root = createRoot(document.getElementById('app'));

function handleClick() {
  alert('دکمه کلیک شد!');
}

function handleSelectChange(event) {
  alert(`انتخاب شده: ${event.target.value}`);
}

const menuProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'right',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'right',
  },
  getContentAnchorEl: null,
};

root.render(
  <StrictMode>
    <App name="StackBlitz" />
    <Button variant="contained" color="primary" onClick={handleClick}>
      دکمه متریال
    </Button>
    <Select
      label="انتخاب گزینه"
      onChange={handleSelectChange}
      style={{ marginTop: '16px', margin: '10px' }}
      displayEmpty // اضافه کردن ویژگی displayEmpty
      value="" // مقدار انتخابی خالی
      MenuProps={menuProps} // افزودن ویژگی MenuProps برای تنظیم منو
    >
      <MenuItem value="">
        <em>لطفاً یک گزینه را انتخاب کنید</em>
      </MenuItem>
      <MenuItem sx={{ textAlign: 'right' }} value="گزینه 1">
        گزینه 1
      </MenuItem>
      <MenuItem sx={{ textAlign: 'right' }} value="گزینه 2">
        گزینه 2
      </MenuItem>
      <MenuItem sx={{ textAlign: 'right' }} value="گزینه 3">
        گزینه 3
      </MenuItem>
    </Select>
  </StrictMode>
);
