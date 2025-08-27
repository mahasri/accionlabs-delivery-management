# Agile Development

Our agile development approach is designed to ensure rapid, high-quality delivery while maintaining flexibility to adapt to changing requirements. We implement proven frameworks that promote collaboration, continuous improvement, and value delivery.

<div style="text-align: center; margin: 30px 0;">
    <img src="../../../assets/media/agile-1.png" alt="Agile Development Process" style="width: 100%; max-width: 800px; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
</div>

## 📋 Agile Development Process

### Scrum

Scrum is widely used in product development, especially software. It provides a structured approach with 3 roles (Scrum Master, Product Owner, Developers), five events (Sprint, Planning, Daily Scrum, Review, Retrospective), and three artifacts.

Scrum was created and is primarily used for the dynamic world of new product development where its Sprint-based iterative approach facilitates incremental development, fast feedback, quick learning and continuous adaptation to maximize business value delivery.

### Kanban Method

Kanban Method (often called simply 'Kanban') uses continuous flow to adapt to changing requirements and business needs. It has a flexible process structure and often needs to be customized to suit the team context. It has six core practices, 3 core meetings (Replenishment, Daily Kanban, Retrospective) and utilizes powerful flow metrics to drive continuous improvement.

While it is often used for enhancements and support work, it can work equally well for new product development.

### SAFe (Scaled Agile Framework)

SAFe is designed for larger organizations that need to scale Agile practices across multiple teams and departments. It uses Scrum and Kanban at the team level, and adds additional structure (visualization, roles, metrics, meetings, etc.) to support alignment and coordination across teams that work on the same product or a collection of related products (portfolio).

SAFe is an extensive framework and requires significant investment with slow learning curve. It can be a good choice for:

- **Large enterprises** (500+ people) with complex structures
- **Organizations** who want structured guidance in their transition from traditional models to Agile
- **Organizations** needing tight alignment with existing hierarchy, portfolio management, and governance

### LeSS (Large-Scale Scrum)/Nexus/Scrum@Scale

Similar to SAFe, these are scaling frameworks that are relevant for large-scale product development involving multiple Scrum teams. While the usage is similar to SAFe, they have some structural differences and are relatively simpler than SAFe. These are good options for:

- **Mid-size organizations** (a few hundred people), department-level scaling or scaling Agile at the product level (3 to 9 teams)
- **Organizations** that are already practicing Scrum well at the team level
- **Organizations** that value simplicity and lean thinking, and prefer scaling incrementally and/or bottom-up

## 💡 Value Discovery Concepts

Before we start building products and features, it's essential to understand what we want to build and why. Value discovery ensures that our time and effort go into creating meaningful, useful outcomes for our customers and users. It focuses on aligning product development with real needs, thereby maximizing return on investment and impact.

### Product

A product is a solution that delivers value to users by solving a specific problem or fulfilling a particular need. It can be a digital product (mobile app or a web-based solution), a physical item (a wearable device), or even a service (consulting or counseling). In Agile, we treat the product as something that evolves over time through feedback and iteration, rather than being built in a single pass. A well-defined product has a clear user base, a unique value proposition, and measurable outcomes.

### Product Vision, Goals and Roadmap

- **Product Vision**: A short, inspiring statement that defines the long-term purpose and aspiration for the product. It provides direction and motivation for the team. Example: "Help individuals manage their health and fitness with minimum time commitment."

- **Goals**: Medium-term outcomes that contribute to the vision. These are specific, measurable, and time-bound objectives, like "Increase user conversion rate from X% to Y% by the end of <month>."

- **Roadmap**: A high-level, time-oriented plan that outlines how the team will achieve the product goals. It includes major milestones, feature releases, and alignment with strategic priorities.

### Product Backlog and Requirements Hierarchy

The Product Backlog (PBL) is an emergent, ordered list of what is needed to improve the product. It is the single source of work undertaken by the Scrum Team. The individual items in the PBL are called Product Backlog Items (PBI's).

Most Agile teams use User Stories to define product feature requirements.

#### User Stories

User Stories are simple, structured descriptions of a feature from the perspective of the end user. They follow the format:

**As a <user persona or role>, I want <feature/functionality> so that <value proposition>**

For example: *As a high net-worth individual (HNI) I want to see a summary of my investments across different financial products so that I can balance/rebalance my portfolio regularly.*

Each story should include **Acceptance Criteria** – a set of conditions that must be true for the story to be considered complete.

A good user story is **INVEST** – Independent, Negotiable (based on value and feasibility), Valuable (to the end user), Estimatable (by the team), Small enough (to be completed within a Sprint), Testable (validation for completion).

While User Stories are sufficient for individual teams that work on small products, we often need a bigger requirement hierarchy for big products that need multiple teams to work together. The most common requirement hierarchy is **Initiative => Epics => User Stories**:

#### Epics/Features

An Epic is a user facing functionality that is too big to be done by a single team in a single Sprint. In other words, an Epic will either take multiple Sprints to be completed or might require multiple teams to collaborate across one or more Sprints.

Epics are broken down into smaller user stories that may be implemented by one or more teams. Each story must be small enough to be completed by a single team within a single Sprint. While splitting an Epic into smaller User Stories, we should use vertical slicing – ensuring each slice delivers end-to-end value and can be validated independently.

**Epic Usage Guidelines:**
- Each Epic should aim to accomplish an end-to-end functionality, and should be defined using User Story format, with high level acceptance criteria
- Epics must be testable - acceptance criteria will provide guidelines on how the Epic will be tested
- Epics may be estimated based on their relative size, during or before the planning process

#### Initiative

An Initiative is a strategic grouping of related epics that support a broader business objective or theme. Each initiative should be tied to a clear business outcome, such as improving user retention or entering a new market segment.

Initiatives can either be released as a whole or in parts, depending on dependencies and value delivery cadence. For initiatives that need to be released as a whole, we should aim to release them within 3 months or less, to ensure incremental value delivery and faster feedback. Large initiatives can be split into smaller, outcome-oriented sub-initiatives, each aiming to deliver a tangible business outcome.

### Requirement Prioritization

Requirements prioritization is a 2-step process:
1. **Requirement selection (filtering)** – to ensure we choose to build the right product and features
2. **Prioritization (ordering)** – to ensure we build them in an order that maximizes value delivery

#### Requirement Selection Criteria

When evaluating potential requirements, consider:
- **Desirability** – Do users really want or need this?
- **Feasibility** – Can we build it with the time, technology, and skills available?
- **Viability** – Will this contribute to business success (e.g., ROI, market differentiation)?

#### Prioritization Criteria

When comparing and sequencing backlog items, consider:
- **Value** – What business or customer benefit will it deliver?
- **Cost** – How much effort, time, and resources do we require?
- **Risk** – What are the chances of failure and their possible impact?
- **Sequence/Order** – Are there dependencies or logical order among work items?

#### Prioritization Approaches

##### 1. Eisenhower Matrix (Value vs Urgency)

This method segregates items based on:
- **High Value & High Urgency**: Do immediately
- **High Value & Low Urgency**: Schedule
- **Low Value & High Urgency**: Delegate or reassess
- **Low Value & Low Urgency**: Remove or defer

This helps teams focus on what truly matters instead of being reactive.

##### 2. Kano Model

This approach categorizes features into:
- **Basic Needs** – Must-haves. Missing them causes dissatisfaction
- **Performance Needs** – More is better. Directly correlated with satisfaction
- **Delighters** – Unexpected features that delight users but aren't demanded

The model helps balance effort between meeting expectations and surprising users.

##### 3. Cost of Delay (CoD) & Weighted Shortest Job First (WSJF)

This method quantifies the impact of delay in delivering a feature:
- **Cost of Delay (CoD)** - User-business impact per unit of time delayed. Please note this is not the same as value of a feature; it is 'loss of value' with time
- **WSJF** - CoD / Job Duration (or Effort)

Features with a higher WSJF score are prioritized to maximize value delivered per unit of effort.

##### 4. MoSCoW Model

This is a qualitative prioritization approach:
- **Must have** – Critical for this release
- **Should have** – Important but not urgent
- **Could have** – Nice-to-have, if team capacity allows
- **Won't have (now)** – Out of scope for the current release

This is useful in timeboxed environments like Sprints or quarterly releases.

## 🏃‍♂️ Scrum Framework

Scrum is a lightweight framework that helps people, teams and organizations generate value through adaptive solutions for complex problems. It was developed in early 1990s for managing software product development and now is considered the most popular and most widely adopted framework to implement Agile.

At a very high level, Scrum can be broken down into the following components:
- **Values** – Commitment, Courage, Openness, Focus and Respect
- **Sprint** – A fixed timebox, one month or less, where team focuses on achieving a well-defined business goal
- **3 Roles** – Scrum Master, Product Owner, Developers (aka Dev Team)
- **5 events** – Sprint, Sprint Planning, Daily Scrum, Sprint Review and Sprint Retrospective
- **3 Artifacts** – Product Backlog, Sprint Backlog and Product Increment

### Sprint-based Flow

The idea of Sprint is at the core of Scrum; it binds everything together. Let us try to understand the idea and the motivations behind it:

- **Fixed timebox**: Sprint duration is a fixed timebox that is expected to stay the same from one sprint to another. While 2 weeks is the most common Sprint duration, a team must choose what works best for them (not more than a month)

- **Sprint Goal**: The key idea of a timebox is to commit to a specific business goal and finish it before the Sprint ends. While the scope of work to achieve that goal may go through changes, the Sprint goal is expected to stay the same. Significant changes in Sprint goal during Sprint may call for a need to cancel the current Sprint and start a fresh one

- **Prioritize finishing**: A clear goal for a short, fixed timebox helps align entire team's efforts and brings a sense of urgency enabling faster completion of work items

- **Inspect and Adapt culture**: Sprint enforces a continuous improvement culture by providing multiple opportunities to inspect and adapt the product as well as the process

### Scrum Team

The fundamental unit of Scrum is a small team of people, a Scrum Team, that consists of one Scrum Master, one Product Owner, and Developers - it is a cohesive unit of professionals focused on one objective at a time, the Product Goal.

Scrum Teams are cross-functional, meaning the members have all the skills necessary to create value each Sprint.

They are also self-managing, meaning they internally decide who does what, when, and how. The Scrum Team is responsible for all product-related activities from stakeholder collaboration, verification, maintenance, operation, experimentation, research and development, and anything else that might be required. They are structured and empowered by the organization to manage their own work. Working in Sprints at a sustainable pace improves the Scrum Team's focus and consistency.

The entire Scrum Team is accountable for creating a valuable, useful Increment every Sprint.

### Product Owner (PO)

The Product Owner is accountable for maximizing the value of the product resulting from the work of the Scrum Team.

**Key responsibilities of the Product Owner:**
- Develop and explicitly communicate the Product Goal and Roadmap
- Work closely with stakeholders and manage their expectations
- Manage Product Backlog:
  - Create backlog items, with sufficient details
  - Keep the Product Backlog items in priority order
  - Ensure that the Product Backlog is transparent, visible and understood
- Review completed work items and provide timely feedback
- Maintain an open, positive and collaborative working relationship with Scrum Master and Developers
- Attend all Scrum events
- Be available to developers on priority basis to answer their questions/concerns

### Scrum Master (SM)

The Scrum Master is accountable for the Scrum Team's effectiveness. They are expected to work as an enabler for the team – an enabler for sustainable pace, good quality and overall team growth.

**Key responsibilities:**
- **Foster a positive and collaborative team culture:**
  - Educate/mentor team on Agile and Scrum practices
  - Promote collaboration and collective work ownership
  - Facilitate team meetings effectively - to harness collective intelligence
- **Enable and sustain high team performance:**
  - Assist team in removing impediments and unnecessary distractions
  - Promote engineering practices to improve product quality
  - Help team track their work – board, artefacts and metrics
  - Promote continuous learning and improvement

### Developers (Dev Team)

Developers include all team members who contribute in converting backlog items to product increment – UI designers, Architects, Developers, Testers, Business Analysts, DBA's, etc.

**The Developers are responsible for:**
- Creating a plan for the Sprint, the Sprint Backlog
- Completing work with good quality, by adhering to team's Definition of Done
- Sharing information, knowledge and collaborating with each other
- Adapting their plan each day toward the Sprint Goal
- Holding each other accountable as professionals
- Improving team processes through regular inspect and adapt

### Scrum Values

#### Commitment
Team members personally commit to achieving the goals of the Scrum Team. This includes commitment to quality, to the Sprint Goal, and to supporting each other. It fosters responsibility and ownership.

#### Focus
With a clear Sprint Goal and a prioritized backlog, the team focuses on the most important work and avoids distractions. The timeboxed nature of Sprints encourages a sustained and sharp focus on delivering value.

#### Openness
Scrum teams are open about their progress, challenges, and learning. They share feedback candidly during events like Sprint Reviews and Retrospectives. Openness builds trust and fosters continuous improvement.

#### Respect
Scrum emphasizes mutual respect among team members. Everyone is valued for their unique perspectives and contributions. Respect enables better collaboration and reduces friction in decision-making.

#### Courage
Scrum teams have the courage to take on tough challenges, speak up about impediments, and make necessary changes—even when uncomfortable. Courage supports innovation and adaptability in the face of uncertainty.

These values guide the behaviour and mindset of the team. When embraced fully, they help create a culture of trust, collaboration, and continuous learning—enabling Scrum to deliver its full potential.

### Scrum in Action: Sprint Execution

In Scrum, value creation activities take place inside the 'Sprint' – each Sprint is an opportunity to create and deliver business value to stakeholders and customers. Below is the sequence of key activities in a Sprint:

#### Sprint Planning
This is the first activity in the sprint where team defines a meaningful goal and plans necessary work (Sprint Backlog) to achieve the Sprint goal. The Sprint Backlog provides clarity on what needs to be done, by who, in roughly what order.

#### Sprint Execution
Soon after the planning, the team members start pulling individual tasks (one by one), with a focus on finishing stories in priority order. Once a work item is completed in all respects (coding, code review, testing, etc.), Product Owner reviews it and provides feedback to the team.

#### Daily Scrum
This is a daily event time-boxed to 15-minutes, usually held at the start of the day. Here, the team quickly inspects work done since last Daily Scrum and the overall progress towards the Sprint goal, and plans work for the next 24 hours.

#### Sprint Review
Held on the last day of the Sprint, here the Scrum team inspects the Product Increment with the stakeholders and adapts the Product Backlog if needed. This is an informal meeting to seek timely feedback from stakeholders and foster trust and collaboration.

#### Sprint Retrospective
This is an opportunity for the Scrum Team to continuously evolve their process by inspecting their experience in the current Sprint, learning from it and planning small improvements in the next one. If Sprint Review is an opportunity to review and enhance the Product, Retrospective is an opportunity to review and enhance the Team Process.


