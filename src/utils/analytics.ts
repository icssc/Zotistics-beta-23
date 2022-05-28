import ReactGA4 from 'react-ga4';

const analytics = {
    nav: {
        category: 'Navbar',
        actions: {
            OLD_ZOTISTICS_LINK: 'Old Zotistics Link',
            HOME_LOGO: 'Click Home Logo',
            FAQ: 'Click FAQ',
            FEEDBACK: 'Click Feedback',
            THEME: 'Change Theme'
        }
    },
    search: {
        category: "Search Query",
        actions: {
            INSTRUCTOR: 'Instructor',
            QUARTER: 'Quarter',
            YEAR: 'Year',
            DEPARTMENT: 'Department',
            COURSE_NUMBER: 'Course Number',
            COURSE_CODE: 'Course Code'
        }
    },
    data: {
        category: "Data",
        actions: {
            COMPARE_BUTTON: 'Click Compare'
        }
    }
}
export default analytics

interface LogType {
    category: string,
    action: string,
    label?: string,
    value?: number
}

export const logAnalytics = ({ category, action, label, value }: LogType) => {
    ReactGA4.event({category, action, label, value});
}