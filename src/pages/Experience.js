import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from '@material-ui/icons/Work';

function Experience() {
    return (
        <div className='experience'>
            <VerticalTimeline lineColor='#3e497a'>
                <VerticalTimelineElement
                    className='vertical-timeline-component-education'
                    date='2006 - 2009'
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>Tecnologo en Sistemas  de Información</h3>
                    <p>ITM (Instituto Tecnológico Metropolitano)</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-component-education'
                    date='2009 - 2009'
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>Contrato de Aprendizaje</h3>
                    <p>Manejo de Cartografía y GPS, actualización de mapas con ArcGis, soporte a equipos de trabajo.</p>
                </VerticalTimelineElement>


                <VerticalTimelineElement
                    className='vertical-timeline-component-education'
                    date='2010 - 2010'
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>Auxiliar de sistemas</h3>
                    <p>Soporte, Mantenimiento y Administración de equipos</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className='vertical-timeline-component-education'
                    date='2010 - 2011'
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>Analista de soporte de sistemas</h3>
                    <p>Mantenimiento preventivo y correctivo de equipos, formateo e instalación de Windows XP y 7,
                        SAP, Antivirus, Office entre otros programas, configuración de Módems
                    </p>
                </VerticalTimelineElement>


                <VerticalTimelineElement
                    className='vertical-timeline-component-education'
                    date='2011 - 2013'
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>Asesor Soporte UNE Instalaciones y Reparación</h3>
                    <p>
                        Configuración de VLAN, IGMP, configuración de perfiles en las tarjetas para el funcionamiento de los módems en empresas
                        y hogares manejo de aplicaciones como Fénix Oracle ATC, RighTv, AMS, N2000 script entre otros y Lider de Mesa de Ayuda
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className='vertical-timeline-component-education'
                    date='2013 - 2016'
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>Analista de soporte de sistemas</h3>
                    <p>
                        Soporte a sistemas varias cuentas que tiene la empresa, entre ellas he trabajado en TGS, PepsiCo y Banco Galicia
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className='vertical-timeline-component-education'
                    date='2016 - 2018'
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>Gestión y Coordinación Servicio Técnico de Microinformática (Banco Galicia)</h3>
                    <p>
                        Gestión y Coordinación (Incidentes, Solicitudes y Tareas) del servicio técnico que prestan los diferentes
                        proveedores, mencionando: NCR, LEXMARK, NOVATIUM, MEGATECH, PERMAQUIM y CIRILO entre otros, al área de tecnología
                        y microinformática en las diferentes sucursales y edificios centrales del banco.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className='vertical-timeline-component-education'
                    date='2018 - act'
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>Account Support Analyst</h3>
                    <p>
                        Actuar como representante del servicio de NCR a la cuenta de Bancolombia.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className='vertical-timeline-component-education'
                    date='2022 - 2022'
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>Teacher Assistant</h3>
                    <p>
                        Coordinar a un grupo de estudiantes para lograr la integración al grupo de estudio.
                        • Orientar a los estudiantes en los primeros pasos de la cursada.
                        • Asistir la resolución de ejercicios y promover la colaboración grupal (Pair Programming).
                        • Proponer ideas para la mejora de los procesos del Bootcamp.

                        Full-Stack Teaching Assistant
                        Bootcamp Assistant (TA) for Full-Stack Development Students.

                        Main tasks:
                        • Coordinate a group of students to achieve integration to the study group.
                        • Guide students in the first steps of the course.
                        • Assist to solve exercises and promote group collaboration (Pair Programming).
                        • Propose ideas to improve the Bootcamp processes.

                        Asistente de enseñanza Full-Stack Ayudante de bootcamp (TA) para alumnos de Desarrollo Full-Stack. Tareas principales:
                        • Coordinar a un grupo de estudiantes para lograr la integración al grupo de estudio.
                        • Orientar a los estudiantes en los primeros pasos de la cursada.
                        • Asistir la resolución de ejercicios y promover la colaboración grupal (Pair Programming). • Proponer ideas para la mejora de los procesos del Bootcamp. Full-Stack Teaching Assistant

                        Bootcamp Assistant (TA) for Full-Stack Development Students. Main tasks:
                        • Coordinate a group of students to achieve integration to the study group. • Guide students in the first steps of the course.
                        • Assist to solve exercises and promote group collaboration (Pair Programming). • Propose ideas to improve the Bootcamp processes.

                        Aptitudes: Liderazgo de equipos · Metodologías ágiles · empatia · Supervisión proactiva · Docencia · Comunicación · Capacidad de análisis
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className='vertical-timeline-component-education'
                    date='2022 - 2022'
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>Full Stack Web Developer</h3>
                    <p>
                        Un Desarrollador Full Stack se orienta a herramientas de programación como JavaScript, CSS, Node.js y React junto con otras tecnologías que completan
                        el desarrollo profesional del front y back-end.
                        Esto significa tener un perfil híbrido en el ámbito del desarrollo web y trabajar tanto en el front-end (parte visual) como en el back-end (parte lógica) de un proyecto.
                    </p>
                </VerticalTimelineElement>



            </VerticalTimeline>
        </div>
    )
}

export default Experience