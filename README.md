
# 🧪 Análise de Tráfego com Wireshark

Este repositório documenta a prática de análise de pacotes utilizando o Wireshark em uma rede local com foco em segurança da informação. A atividade consistiu na captura de pacotes enquanto se interagia com um formulário web **sem criptografia**, desenvolvido para esta finalidade.

## 🎯 Objetivo

Aplicar os conhecimentos teóricos sobre sniffers de rede, analisando pacotes capturados com a ferramenta Wireshark. A prática visa identificar protocolos, fluxos de dados, informações sensíveis trafegadas em texto claro, e possíveis comportamentos suspeitos na rede.

---

## 📋 Descrição da Atividade

A prática foi realizada conforme orientações descritas no trabalho anexado.

### Etapas Realizadas:

1. Abertura do Wireshark e escolha da interface de rede ativa.
2. Início da captura de pacotes por 3 a 5 minutos.
3. Acesso ao [formulário criado](https://github.com/kaylannesantos/packet-capture) e preenchimento com **login e senha**.
4. Análise dos pacotes capturados para:
   - Identificar protocolos de comunicação mais frequentes.
   - Observar dados sensíveis transmitidos sem criptografia.
   - Detectar pacotes HTTP, Telnet, SSH, ICMP etc.
   - Estudar cabeçalhos de rede (frame, IP, TCP/UDP).
   - Localizar endereços IP e MAC.
   - Verificar presença de protocolos como QUIC, SCTP, DCCP.
5. Encerramento da captura e exportação do arquivo `.pcapng`.

---

## 📂 Estrutura

```bash
.
├── app.py
├── templates
│   └── index.html
└── static
    ├── style.css
    └── script.js
```

---

## 🔍 Principais Resultados

### 🛰️ Protocolos mais frequentes identificados:
1. **HTTP** – Transmissão de dados em texto claro.
2. **TCP** – Protocolo de transporte confiável.
3. **ARP** – Resolução de endereços MAC a partir de IPs.

### 🔓 Dados Sensíveis Capturados
Durante o acesso ao formulário não criptografado, foi possível visualizar:
- Endereço IP de origem e destino
- Dados de login e senha trafegando em **texto claro**, localizados na aba *"Conteúdo do pacote selecionado (hex/ASCII)"*

### 📡 Outros Pacotes Relevantes
- **ICMP**: Echo Request/Reply (ping)
- **Telnet**: Não utilizado no experimento
- **SSH**: Apresentou dados criptografados

---

## 🧠 Considerações

### 🔐 Segurança
O experimento evidencia o risco de utilizar aplicações web sem criptografia, onde qualquer sniffer pode capturar credenciais e dados sensíveis.

### ⚠️ Limitações do Wireshark
- Requer permissões elevadas para uso completo.
- Pode gerar grandes volumes de dados.
- Não detecta ataques automaticamente, apenas coleta dados.

### 🛡️ Cuidados Recomendados
- Nunca utilizar em redes públicas ou corporativas sem autorização.
- Sempre anonimizar informações sensíveis antes de compartilhar capturas.

---

## 📎 Referências

- [Wireshark](https://www.wireshark.org/)
- Documentação oficial da atividade em PDF (ver `atv-snnifer.pdf`)
- [Formulário de captura sem HTTPS](https://github.com/kaylannesantos/packet-capture)

---
