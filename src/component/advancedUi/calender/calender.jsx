import React, { useEffect, useState } from "react";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import ALLImages from "../../../common/imagesData";
import SimpleBar from "simplebar-react";

const Calender = () => {


	let eventGuid = 0;
	let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

	const INITIAL_EVENTS = [
		{
			id: createEventId(),
			title: "Meeting",
			start: todayStr,
		},
		{
			id: createEventId(),
			title: "Meeting Time",
			start: todayStr + "T16:00:00",
		},
	];

	const initialstate1 = {
		calendarEvents: [
			{
				title: "Atlanta Monster",
				start: new Date("2019-04-04 00:00"),
				id: "1001",
			},
			{
				title: "My Favorite Murder",
				start: new Date("2019-04-05 00:00"),
				id: "1002",
			},
		],

		events: [
			{
				title: "My Event 1",
				id: "1",
				bg: "!bg-primary",
				border: "!border-primary",
			},
			{
				title: "My Event 2",
				id: "2",
				bg: " !bg-secondary",
				border: "!border-secondary",
			},
			{
				title: "My Event 3",
				id: "3",
				bg: "!bg-warning",
				border: "!border-warning",
			},
			{ title: "My Event 4", id: "4", bg: "!bg-info", border: "!border-info" },
			{
				title: "My Event 5",
				id: "5",
				bg: "!bg-success",
				border: "!border-success",
			},
			{
				title: "My Event 6",
				id: "6",
				bg: "!bg-danger",
				border: "!border-danger",
			},
		],
		weekendsVisible: true,
	};
	const [state] = useState(initialstate1);

	useEffect(() => {
		let draggableEl = document.getElementById(
			"external-events"
		);
		if (draggableEl) {
			new Draggable(draggableEl, {
				itemSelector: ".fc-event",
				eventData: function (eventEl) {
					let title = eventEl.getAttribute("title");
					let id = eventEl.getAttribute("data");
					let classValue = eventEl.getAttribute("class");
					return {
						title: title,
						id: id,
						className: classValue,
					};
				},
			});
		}
	}, []);

	function renderEventContent(eventInfo) {
		return (
			<>
				<b>{eventInfo.timeText}</b>
				<i>{eventInfo.event.title}</i>
			</>
		);
	}

	const handleEventClick = (clickInfo) => {
		if (
			window.confirm(
				`Are you sure you want to delete the event '${clickInfo.event.title}'`
			)
		) {
			clickInfo.event.remove();
		}
	};

	const handleEvents = (events) => { };

	const handleDateSelect = (selectInfo) => {
		let title = prompt("Please enter a new title for your event");
		let calendarApi = selectInfo.view.calendar;

		calendarApi.unselect();

		if (title) {
			calendarApi.addEvent({
				id: createEventId(),
				title,
				start: selectInfo.startStr,
				end: selectInfo.endStr,
				allDay: selectInfo.allDay,
			});
		}
	};

	function createEventId() {
		return String(Date.now());
	}

	return (
		<div>
			<PageHeader currentpage="Calender" activepage="Advanced Ui" mainpage="Calender" />
			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-3">
					<div className="box">
						<div className="box-header">
							<button type="button" className="ti-btn ti-btn-soft-primary m-0 w-full"><i className="ri-add-line"></i>Create New Event</button>
						</div>
						<div className="box-body p-0">
							<div className="p-4" id="external-events">
							<h4>Draggable Events</h4>
						{state.events.map((event) => (
							<div
								className={`fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event   text-black   ${event.bg} ${event.border}`}
								title={event.title}
								datatype={event.id}
								key={event.id}
							>
								<div className="fc-event-main">{event.title}</div>
							</div>
						))}
								<div
									className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event !bg-secondary !border-secondary text-black">
									<div className="fc-event-main">My Event 2</div>
								</div>
								<div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event !bg-success !border-success">
									<div className="fc-event-main">My Event 3</div>
								</div>
								<div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event !bg-info !border-info">
									<div className="fc-event-main">My Event 4</div>
								</div>
								<div
									className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event !bg-warning !border-warning text-black">
									<div className="fc-event-main">My Event 5</div>
								</div>
								<div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event !bg-danger !border-danger">
									<div className="fc-event-main">My Event 6</div>
								</div>
							</div>
							<div className="border-y activity-scroll border-dashed border-gray-200 dark:border-white/10">
								<div className="p-4 flex items-center mb-6 justify-between">
									<h6 className="font-semibold my-auto text-xl">  Activity :
									</h6>
									<button type="button" className="ti-btn ti-btn-soft-primary m-0 px-2 py-1">View All</button>
								</div>
								<SimpleBar style={{ maxHeight: 250 }}>
								<div className="p-4" id="full-calendar-activity">
									<ul className="fullcalendar-events-activity">
										<li>
											<div className="flex items-center justify-between">
												<p className="mb-1 text-sm font-semibold"> Monday, Jan 1,2023
												</p>
												<span className="badge rounded-md bg-gray-100 text-gray-800 mb-1 p-1">12:00PM-1:00PM</span>
											</div>
											<p className="mb-0 text-gray-500 dark:text-white/70 text-xs">  Meeting with a client about new project requirement.
											</p>
										</li>
										<li>
											<div className="flex items-center justify-between">
												<p className="mb-1 text-sm font-semibold">  Thursday, Dec 29,2022
												</p>
												<span className="badge rounded-md bg-success text-white mb-1 p-1">Completed</span>
											</div>
											<p className="mb-0 text-gray-500 dark:text-white/70 text-xs"> Birthday party of niha suka
											</p>
										</li>
										<li>
											<div className="flex items-center justify-between">
												<p className="mb-1 text-sm font-semibold"> Wednesday, Jan 3,2023
												</p>
												<span className="badge  rounded-md bg-warning/10 text-warning mb-1 p-1">Reminder</span>
											</div>
											<p className="mb-0 text-gray-500 dark:text-white/70 text-xs"> WOrk taget for new project is completing
											</p>
										</li>
										<li>
											<div className="flex items-center justify-between">
												<p className="mb-1 text-sm font-semibold"> Friday, Jan 20,2023
												</p>
												<span className="badge rounded-md bg-gray-100 text-gray-800 mb-1 p-1">06:00PM - 09:00PM</span>
											</div>
											<p className="mb-0 text-gray-500 dark:text-white/70 text-xs"> Watch new movie with family
											</p>
										</li>
										<li>
											<div className="flex items-center justify-between">
												<p className="mb-1 text-sm font-semibold"> Saturday, Jan 07,2023
												</p>
												<span className="badge  rounded-md bg-danger/10 text-danger mb-1 p-1">Due Date</span>
											</div>
											<p className="mb-0 text-gray-500 dark:text-white/70 text-xs"> Last day to pay the electricity bill and water bill.need to check the bank details.
											</p>
										</li>
									</ul>
								</div>
								</SimpleBar>
							</div>
							<div className="p-4 pb-0">
								<img src={ALLImages('png116')} alt="" className="mx-auto"/>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-9">
					<div className="box">
						<div className="box-body">
							<FullCalendar
								plugins={[
									dayGridPlugin,
									timeGridPlugin,
									interactionPlugin,
								]}
								headerToolbar={{
									left: "prev,next today",
									center: "title",
									right: "dayGridMonth,timeGridWeek,timeGridDay",
								}}
								initialView="dayGridMonth"
								editable={true}
								selectable={true}
								selectMirror={true}
								dayMaxEvents={true}
								weekends={state.weekendsVisible}
								initialEvents={INITIAL_EVENTS}
								select={handleDateSelect}
								eventContent={renderEventContent}
								eventClick={handleEventClick}
								eventsSet={handleEvents}
							/>
						</div>
					</div>
				</div>
			</div>
        
		</div>
	);
};

export default Calender;
