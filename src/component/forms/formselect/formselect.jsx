import React, { useState } from 'react'
import PageHeader from '../../../layout/layoutsection/pageHeader/pageHeader';
import Select from 'react-select';
import { DefaultSelect, DisabledGroupData, GroupedData, Multiselectcomponent } from '../../../common/select2data';
import DropdownSelect from './dropdownselect';
import { MultiSelect } from "react-multi-select-component";
import Creatable from "react-select/creatable";
import CreatableSelect from 'react-select/creatable';

const Formselect = () => {

  const components = {
    DropdownIndicator: null,
  };

  const createOption = (label) => ({
    label,
    value: label,
  });

  const [selected, setSelected] = useState([]);

  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState([]);

  const handleKeyDown = (event) => {
    if (!inputValue) return;
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        setValue((prev) => [...prev, createOption(inputValue)]);
        setInputValue('');
        event.preventDefault();
    }
  };

  return (
    <div>

      <PageHeader currentpage="Select" activepage="Forms" mainpage="Select" />

      <div className="grid grid-cols-12 gap-x-6">
        <div className="col-span-12 md:col-span-6 xl:!col-span-3">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Default Select</h5>
            </div>
            <div className="box-body">
              <Select classNamePrefix='react-select' options={DefaultSelect} placeholder='Open this select menu' />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xl:!col-span-3">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Pilled Select</h5>
            </div>
            <div className="box-body">

              <Select classNamePrefix='react-select' className="ounded-full" options={DefaultSelect} placeholder='Open this select menu' />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xl:!col-span-3">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Disabled Select</h5>
            </div>
            <div className="box-body">

              <Select classNamePrefix='react-select' className="opacity-70 pointer-events-none " isDisabled={true} options={DefaultSelect} placeholder='Open this select menu' />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xl:!col-span-3">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Select With Hidden Label</h5>
            </div>
            <div className="box-body">
              <label htmlFor="hs-hidden-select" className="sr-only">Label</label>

              <Select classNamePrefix='react-select' isHidden options={DefaultSelect} placeholder='Open this select menu' required />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-x-6">
        <div className="col-span-12 md:col-span-6 xl:!col-span-4">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Select With Label</h5>
            </div>
            <div className="box-body">
              <label htmlFor="hs-select-label" className="ti-form-select-label">Label</label>
              <Select classNamePrefix='react-select' options={DefaultSelect} placeholder='Open this select menu' />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xl:!col-span-4">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Select Sizes</h5>
            </div>
            <div className="box-body">
              <div className="space-y-3 select-sizes">

                <Select classNamePrefix='react-select' className='py-[0.15rem] !text-[12px] !px-0 ti-form-select' options={DefaultSelect} placeholder='Open this select menu' />
                <Select className='ti-form-select sm:p-4 !px-0 !py-2' classNamePrefix='react-select' options={DefaultSelect} placeholder='Open this select menu' />
                <Select className='ti-form-select sm:p-5 !px-0 !py-3 !text-[16px]' classNamePrefix='react-select' options={DefaultSelect} placeholder='Open this select menu' />

              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 xl:col-span-4">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Select With Validation States</h5>
            </div>
            <div className="box-body">
              <div className="space-y-3">
                <div>
                  <label htmlFor="select-1" className="ti-form-select-label">Label</label>
                  <div className="relative">
                    <Select classNamePrefix='react-select' className='border-red-500 focus:border-red-500 focus:ring-red-500' aria-valid='false' options={DefaultSelect} placeholder='Open this select menu' />
                    <div className="absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center pointer-events-none ltr:pr-8 rtl:pl-8">
                      <svg className="h-4 w-4 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm text-red-600 mt-2">Please select a valid state.</p>
                </div>

                <div>
                  <label htmlFor="select-2" className="ti-form-select-label">Label</label>
                  <div className="relative">
                    <Select classNamePrefix='react-select' className='border-green-500 focus:border-green-500 focus:ring-green-500' aria-valid='false' options={DefaultSelect} placeholder='Open this select menu' />
                    <div className="absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center pointer-events-none ltr:pr-8 rtl:pl-8">
                      <svg className="h-4 w-4 text-green-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.6091 3.41829C13.8594 3.68621 14 4.04952 14 4.42835C14 4.80718 13.8594 5.1705 13.6091 5.43841L6.93313 12.5817C6.68275 12.8495 6.3432 13 5.98916 13C5.63511 13 5.29556 12.8495 5.04518 12.5817L2.3748 9.72439C2.13159 9.45494 1.99701 9.09406 2.00005 8.71947C2.00309 8.34488 2.14351 7.98656 2.39107 7.72167C2.63862 7.45679 2.9735 7.30654 3.32359 7.30328C3.67367 7.30002 4.01094 7.44403 4.26276 7.70427L5.98916 9.55152L11.7211 3.41829C11.9715 3.15046 12.3111 3 12.6651 3C13.0191 3 13.3587 3.15046 13.6091 3.41829Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm text-green-600 mt-2">Looks good!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-x-6">
        <div className="col-span-12 lg:col-span-6">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">React Multiple Select</h5>
            </div>
            <div className="box-body  multiple-select">
              <label className="ti-form-select-label mt-2">Default MultiSelect</label>
              <MultiSelect classNamePrefix='react-select' options={Multiselectcomponent} value={selected} onChange={setSelected} labelledBy="Select" />
              <label className="ti-form-select-label mt-2">MultiSelect Disabled</label>
              <MultiSelect  options={Multiselectcomponent}  onChange={setSelected} disabled labelledBy="Select" />
              <label className="ti-form-select-label mt-2">Multiple Select with Group Option</label>
              <Creatable classNamePrefix="react-select" options={GroupedData} menuPlacement='auto' />
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Single Select</h5>
            </div>
            <div className="box-body">
              <label className="ti-form-select-label mt-2">Createble Single  with multi Select</label>
              <CreatableSelect components={components} classNamePrefix='react-select' inputValue={inputValue} isClearable isMulti menuIsOpen={false} onChange={(newValue) => setValue(newValue)} onInputChange={(newValue) => setInputValue(newValue)} onKeyDown={handleKeyDown} placeholder="Type something and press enter..." value={value} />
              <label className="ti-form-select-label mt-2">Multiple Select with Group Option with Disabled group</label>
              <Creatable classNamePrefix="react-select" options={DisabledGroupData} />
            </div>
          </div>
        </div>
      </div>

      <DropdownSelect />

    </div>
  )
}
export default Formselect;