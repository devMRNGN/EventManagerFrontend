import { Flex } from "@chakra-ui/react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useState } from "react";

const eventsCalendar = [
  { title: "Festa Maira", start: new Date() }
];

export const Calendar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleAddEventSelectAndOpenModal = (selectedDate) => {
    const { start } = selectedDate;
    console.log("Adicionar evento");
    console.log(`Inicio: ${start}`);
  }

  const handleEditEventSelectAndOpenModal = (event) => {
    console.log("Editar evento");
    console.log(JSON.stringify(event.event));
  }

  const handleUpdateEventSelect = (event) => {
    console.log("")
    console.log(JSON.stringify(event.event));
  }

  return (
    <Flex flexDir="column" p="4">
      <FullCalendar
        plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "today next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        locale="pt-br"
        weekends={true}
        select={handleAddEventSelectAndOpenModal}
        eventClick={handleEditEventSelectAndOpenModal}
        eventChange={handleUpdateEventSelect}
        initialEvents={eventsCalendar}
        longPressDelay={1000}
        eventLongPressDelay={1000}
        selectLongPressDelay={1000}
        selectable={true}
        dayMaxEvents={true}
        allDaySlot={false}
        editable={true}
        height="700px"
        buttonText={{
          today: "Hoje",
          month: "Mês",
          week: "Semana",
          day: "Dia",
          list: "Lista",
        }}
      />
    </Flex>
  );
};