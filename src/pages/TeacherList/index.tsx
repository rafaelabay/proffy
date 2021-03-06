import React from 'react'
import PageHeader from '../../components/PageHeader';

import './styles.css';
import TeacherItem from '../../components/TeacherItem';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
        <PageHeader title="Esses são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input id="subject" type="text"/>
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input id="week_day" type="text"/>
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input id="time" type="text"/>
          </div>
        </form>
        </PageHeader>

        <main>
         <TeacherItem />
         <TeacherItem />
         <TeacherItem />

        </main>
    </div>
  )
}

export default TeacherList