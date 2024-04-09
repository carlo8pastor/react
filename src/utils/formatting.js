


const languageMap = {
    'en': 'English', 'es': 'Spanish', 'fr': 'French', 'de': 'German',
    'it': 'Italian', 'ja': 'Japanese', 'ko': 'Korean', 'zh': 'Chinese',
    'ru': 'Russian', 'pt': 'Portuguese', 'ar': 'Arabic', 'hi': 'Hindi',
    'sv': 'Swedish', 'nl': 'Dutch', 'tr': 'Turkish', 'no': 'Norwegian',
    'da': 'Danish', 'fi': 'Finnish', 'pl': 'Polish', 'hu': 'Hungarian',
    'cs': 'Czech', 'ro': 'Romanian', 'el': 'Greek', 'he': 'Hebrew',
    'th': 'Thai', 'id': 'Indonesian', 'vi': 'Vietnamese',

};


export const formatRuntime = (runtime) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}min`;
};


export const getLanguageFullName = (languageCode) => {
    return languageMap[languageCode] || languageCode;
};
