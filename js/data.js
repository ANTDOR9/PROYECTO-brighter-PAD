// ============================
// BRIGHTER-PAD - Datos
// ============================

const appData = {
    categories: [
        {
            id: 'ingenieria',
            name: '🔧 Para Ingenieros',
            description: 'Herramientas para cálculo, simulación y diseño',
            accent: 'turquoise',
            apps: [
                {
                    id: 'calc-cientifica',
                    name: 'Calculadora Científica',
                    description: 'Operaciones avanzadas con matrices, estadística y gráficos',
                    icon: '🧮',
                    color: '#2BBC91',
                    url: 'https://www.wolframalpha.com'
                },
                {
                    id: 'simulador-3d',
                    name: 'Simulador 3D',
                    description: 'Visualización de estructuras y modelos paramétricos',
                    icon: '🏗️',
                    color: '#FF6E2B',
                    url: 'https://www.sketchup.com'
                },
                {
                    id: 'conversor-unidades',
                    name: 'Conversor de Unidades',
                    description: 'Soporte para más de 100 unidades y sistemas',
                    icon: '📐',
                    color: '#EC232A',
                    url: 'https://www.convertunits.com'
                },
                {
                    id: 'analisis-cad',
                    name: 'Análisis CAD',
                    description: 'Visor de archivos DWG, DXF y STEP',
                    icon: '📏',
                    color: '#CD1D2D',
                    url: 'https://www.autodesk.com/viewers'
                }
            ]
        },
        {
            id: 'clinicas',
            name: '🏥 Para Clínicas',
            description: 'Gestión de pacientes, historias clínicas y diagnósticos',
            accent: 'coral',
            apps: [
                {
                    id: 'historia-clinica',
                    name: 'Historia Clínica Digital',
                    description: 'Registro y seguimiento de pacientes con firma digital',
                    icon: '📋',
                    color: '#FF5440',
                    url: '#'
                },
                {
                    id: 'calculadora-dosis',
                    name: 'Calculadora de Dosis',
                    description: 'Cálculo preciso de medicamentos según peso y edad',
                    icon: '💊',
                    color: '#2BBC91',
                    url: '#'
                },
                {
                    id: 'turnos-medicos',
                    name: 'Gestión de Turnos',
                    description: 'Sistema de agenda y recordatorios para pacientes',
                    icon: '📅',
                    color: '#FF6E2B',
                    url: '#'
                },
                {
                    id: 'firma-digital',
                    name: 'Firma Digital',
                    description: 'Firma electrónica de documentos y consentimientos',
                    icon: '✍️',
                    color: '#EC232A',
                    url: '#'
                }
            ]
        },
        {
            id: 'educadores',
            name: '📚 Para Educadores',
            description: 'Recursos para enseñanza virtual y presencial',
            accent: 'orange',
            apps: [
                {
                    id: 'pizarra-interactiva',
                    name: 'Pizarra Interactiva',
                    description: 'Dibujo colaborativo en tiempo real',
                    icon: '🖊️',
                    color: '#FF6E2B',
                    url: 'https://www.miro.com'
                },
                {
                    id: 'creador-quizzes',
                    name: 'Creador de Quizzes',
                    description: 'Evaluaciones interactivas con retroalimentación',
                    icon: '📝',
                    color: '#2BBC91',
                    url: 'https://www.kahoot.com'
                },
                {
                    id: 'biblioteca-virtual',
                    name: 'Biblioteca Virtual',
                    description: 'Acceso a libros y recursos educativos',
                    icon: '📖',
                    color: '#FF5440',
                    url: '#'
                }
            ]
        },
        {
            id: 'creativos',
            name: '🎨 Para Creativos',
            description: 'Herramientas de diseño, edición y generación',
            accent: 'red-intense',
            apps: [
                {
                    id: 'editor-svg',
                    name: 'Editor SVG',
                    description: 'Dise