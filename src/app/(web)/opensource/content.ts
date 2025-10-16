export const content = {
    title: "Australian AI Models, Open to All",
    subtitle:
      "Download, fine-tune, and deploy our models for your projects. All models released under permissive licenses.",
    models: [
      {
        name: "JoeyLLM",
        description:
          "Large language model centered on Australian English, culture, and knowledge. Designed for research, creative writing, and general AI applications. Full transparency: we provide architecture details, training data sources, and evaluation metrics.",
        license: "Apache 2.0",
      },
      {
        name: "LittleJoey",
        description:
          "Compact variant optimized for resource-constrained environments. Fewer parameters mean faster responses and lower memory usage. Perfect for edge devices, experimentation, and offline applications.",
        license: "Apache 2.0",
      },
      {
        name: "Magpie",
        description:
          "Fine-tuned Mistral model using curated Australian datasets. Excels at document extraction and question-answering with reduced regional confusion around currency, law, and location.",
        license: "Apache 2.0 (based on Mistral)",
      },
    ],
    customModels: {
      title: "Custom Models",
      description:
        "Commission bespoke AI variants trained on your data. Can be hosted on our infrastructure or installed on-site. Process typically requires several months depending on data scope and functionality requirements. Email us at business@joeyllm.com.au for more information.",
    },
    contributing: {
      title: "Contributing",
      description:
        "Submit pull requests, report issues, or propose features via GitHub. Read our contribution guidelines and code-of-conduct before participating. We encourage learning by doing.",
    },
  }