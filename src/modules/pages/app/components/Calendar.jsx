import { Flex, useDisclosure } from "@chakra-ui/react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useEffect, useState } from "react";
import { ModalBudget } from "@pages/app/components/ModalBudget.jsx";
import getActiveEventScheduleByCustomerController from "@controllers/schedule/getActiveEventScheduleByCustomerController.js";
import { useAuth } from "@auth/hooks/AuthContext/UseAuth.jsx";

let startDate = null;

export const Calendar = () => {
  const { auth } = useAuth();
  const { customer } = auth;
  const [events, setEvents] = useState([]);

  const {
    isOpen: isBudgetModalOpen,
    onOpen: onBudgetModalOpen,
    onClose: onBudgetModalClose
  } = useDisclosure();

  const handleCreateBudget = (selectedDate) => {
    const { start } = selectedDate;
    startDate = start;
    onBudgetModalOpen();
  }

  const handleEditEventSelectAndOpenModal = (event) => {
    console.log("Editar evento");
    console.log(JSON.stringify(event.event));
  }

  const handleUpdateEventSelect = (event) => {
    console.log("")
    console.log(JSON.stringify(event.event));
  }

  const handleAddEvent = (budget, schedule) => {
    const { isBudget, birthdayPerson, length } = budget;
    const event = {
      id: birthdayPerson,
      backgroundColor: isBudget ? "#4DD0E1" : "#F06292",
      title: `${birthdayPerson} - ${length}`,
      start: new Date(schedule)
    };

    console.log(event);
    setEvents([...events, event]);
  };

  useEffect(() => {
    const handleGetCustomerActiveEvent = async () => {
      try{
        const { success, data } = await getActiveEventScheduleByCustomerController(customer?.customerId, auth?.token);
        console.log(data);
        if(success){
          const { events, eventDateTime } = data;
          events.forEach(event => {
            handleAddEvent(event, eventDateTime);
          });
        }
      }catch(error){
        console.error("Erro ao obter evento ativo do cliente");
        console.error(error?.message);
      }
    };

    handleGetCustomerActiveEvent();
  }, [customer, auth.token]);

  return (
    <>
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
          select={handleCreateBudget}
          eventClick={handleEditEventSelectAndOpenModal}
          eventChange={handleUpdateEventSelect}
          events={events}
          longPressDelay={1000}
          eventLongPressDelay={1000}
          selectLongPressDelay={1000}
          selectable={true}
          dayMaxEvents={true}
          allDaySlot={false}
          editable={false}
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
      <ModalBudget
        addEvent={handleAddEvent}
        startDate={startDate}
        isOpen={isBudgetModalOpen}
        onClose={onBudgetModalClose}
      />
    </>
  );
};