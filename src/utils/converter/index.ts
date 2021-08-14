const Converter = {
    convertDate(arg: string): string {
        return new Date(arg)
            .toLocaleDateString(
                "en-US",
                {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                }
            )
    }
}

export default Converter;