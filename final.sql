SELECT *
FROM policy 
JOIN agent ON agent_code = agent_code
WHERE policy_submit_date > '2018-01-15' AND MONTH(birth_date) = 9;

SELECT *
FROM policy
JOIN agent ON policy.agent_code = agent.agent_code
WHERE policy.policy_status = 'INFORCE' AND agent.agent_office = 'JAKARTA';


UPDATE agent
SET basic_commission = (
    SELECT (commission / premium) * 100
    FROM policy 
    WHERE agent_code = agent.agent_code
);
